const router = require('express').Router();
const Controller = require('../controllers/index');

//register
router.get('/register', Controller.register)
router.post('/register', Controller.postRegister)


// function checkSignIn(req,res,next){
//     console.log(req.session)
// }

//login
router.get('/login', Controller.login)
router.post('/login', Controller.postLogin)
//logout

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

router.get('/', Controller.Home)



// router.get('/user/:id', (req, res, next) => {
//     // if the user ID is 0, skip to the next router
//     if (req.params.id === '0') next('route')
//     // otherwise pass control to the next middleware function in this stack
//     else next()
//   }, (req, res, next) => {
//     // render a regular page
//     res.render('regular')
//   })

module.exports = router