const express = require("express");
const Controller = require("../controllers/index");
const router = express.Router();

router.get("/", Controller.home);
router.get("/login", Controller.login);
router.get("/register", Controller.register);
router.post("/register", Controller.postRegister);
router.get("/add",Controller.addProduct)
router.post("/add",Controller.saveProduct)
router.get("/products/:id/detail",Controller.detailProduct)
router.get("/product/:id/checkout",Controller.checkoutProduct)


module.exports = router;
