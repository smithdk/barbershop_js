const Router = require('express')
const router = new Router
const objectController = require('../controllers/objectController')
const checkRole = require('../middleware/checkRoleMiddleware')
//const userController = require("../controllers/userController");
//const cors = require('cors')

router.get('/',checkRole('ROOT'),objectController.getAll)
//router.get('/',objectController.getAll)
router.post('/',objectController.create)


module.exports = router
