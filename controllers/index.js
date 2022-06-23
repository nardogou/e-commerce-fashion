const { Category, Order, Product, User, UserProfile} = require('../models');
const user = require('../models/user');

class Controller{
    static Home(req,res){
        res.render('home')
    }


    static register (req,res){
        res.render('register')
    }

    static postregister(req,res){
        const{firstName,lastName,phoneNumber,address,username,email,password}= req.body
        // const{} = req.body
        console.log(req.body)
        User.create({username,email,password})
            .then((user)=>{
                // res.redirect('/login')
                return UserProfile.create({firstName,lastName,phoneNumber,address,UserId:user.id})
            })
            .then(()=>{
                res.redirect('/login')
            })
            .catch(err=>{
                res.send(err)
            })
    }
    static login (req,res){
        res.render('login')
    }
}

module.exports = Controller