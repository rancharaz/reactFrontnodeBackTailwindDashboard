const controller = require("../controllers/UserController"); /* importing controller */
const router = require('express').Router();/* importing router to creating routes for api call */

/* Router */
router
.post('/register', controller.register)
.post('/login', controller.login)

module.exports = router;