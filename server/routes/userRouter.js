const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')
const cors = require('cors')

router.post('/login',cors('http://localhost:5000/api/user/login'),userController.login)
router.post('/create',checkRole('ROOT'),userController.create)
//router.post('/create',userController.create)
router.get('/auth', authMiddleware,userController.check)


module.exports = router