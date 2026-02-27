const router = require("express").Router();
const ctrl = require('../controllers/boardController')
const mid = require('../middleware/auth')

//조회(Get요청)
router.get("/", ctrl.list); // http://localhost:3000/board
router.get("/:id", ctrl.detail)


router.post("/", mid.verifyToken,ctrl.insert)
router.delete('/:id' , mid.verifyToken, ctrl.remove)

module.exports = router