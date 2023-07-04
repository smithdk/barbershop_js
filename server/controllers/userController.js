const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')
const generateJwt = (id, username, barbersopID, role) => {
   return  jwt.sign(
        {id, username , barbersopID, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async create(req,res, next){
        try {
            const {objectId, username, password, role, comment} = req.body
            const hashPassword = await bcrypt.hash(password,5)
            const user = await User.create({objectId, username, password: hashPassword, role, comment})
            console.log('create')
            const token  = generateJwt(user.id, user.username, user.objectId ,user.role)
            return res.json({token})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async login(req,res, next){
        try{
            const {username, password} = req.body
            const user = await User.findOne({where: {username}})
            if (!user) {
                return next (ApiError.internal('Имя пользователя или пароль не верно'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword){
                return next (ApiError.internal('Имя пользователя или пароль не верно'))
            }
            const token = generateJwt(user.id, user.username, user.barbersopID ,user.role)
            return res.json(token)
        }catch (e){
            next(ApiError.badRequest(e.message))}
    }
    async check(req, res, next){
        const token  = generateJwt(req.user.id, req.user.username, req.user.barbersopID, req.user.role)
        return next(res.json({token}))
    }
}

module.exports = new UserController()