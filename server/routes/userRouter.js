const Router = require("express");
const router = new Router();
const userController = require("../controller/userController");

router.post("/registartion", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.check);

module.exports = router;
