const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/login',userController.login)
router.post('/create',checkRole('ROOT'),userController.create)
router.get('/auth', authMiddleware,userController.check)


module.exports = router