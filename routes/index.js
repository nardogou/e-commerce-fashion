const express = require("express"); 
const Controller = require("../controllers/index");
const router = express.Router();
router.get("/register", Controller.register);
router.post("/register", Controller.postRegister);

router.get("/login", Controller.login);
router.post('/login', Controller.postLogin)
router.get('/logout',Controller.getLogout)

router.use((req, res, next) => {
    console.log(req.session)
    console.log(req.session.role)
    const error = "Invalid"
    if(!req.session.UserId){
        res.redirect(`/login?error=${error}`)    
    }else{
        next()
    }
})
router.get("/", Controller.home);



router.get("/add",Controller.addProduct)
router.post("/add",Controller.saveProduct)
router.get("/products/:id/detail",Controller.detailProduct)



router.get("/products/:productId/order",Controller.checkoutProduct)




module.exports = router;
