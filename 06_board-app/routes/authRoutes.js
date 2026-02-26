const router = require("express").Router();
const Authctrl = require('../controllers/authController')

//조회(Get요청)


//post
router.post("/", Authctrl.signup)
router.post("/login", Authctrl.login)

module.exports = router