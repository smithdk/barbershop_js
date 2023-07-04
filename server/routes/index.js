const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const objectRouter = require('./objectRouter')

router.use('/user', userRouter)
router.use('/object', objectRouter)
module.exports = router