const express = require("express");
const Controller = require("../controllers/index");
const router = express.Router();

router.get("/", Controller.home);
router.get("/login", Controller.login);
router.get("/register", Controller.register);
router.post("/register", Controller.postRegister);



module.exports = router;
