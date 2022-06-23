const router = require('express').Router();
const Controller = require('../controllers/index');

router.get('/',Controller.Home)
//register
router.get('/register',Controller.register)
router.post('/register',Controller.postRegister)
//login
router.get('/login',Controller.login)
router.post('/login',Controller.postLogin)





module.exports = router