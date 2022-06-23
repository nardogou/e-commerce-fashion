const router = require('express').Router();
const Controller = require('../controllers/index');

router.get('/',Controller.Home)
router.get('/register',Controller.register)
router.post('/register',Controller.postregister)
router.get('/login',Controller.login)
// router.post('/login',Controller.postLogin)





module.exports = router