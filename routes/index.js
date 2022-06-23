const express = require("express");
const Controller = require("../controllers/index");
const router = express.Router();

router.get("/", Controller.home);
router.get("/login", Controller.home);
router.get("/register", Controller.home);



module.exports = router;
