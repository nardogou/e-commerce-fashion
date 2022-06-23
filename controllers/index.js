const {Product,Category,User,UserProfile} = require('../models')
const {Op} = require('sequelize')
class Controller{
    static home(req,res){
			Product.findAll({
				include: 'Category'
			})
			.then(products =>{
				res.render('home',{products})
			})
			.catch(err=>{
				res.send(err)
			})
    }
		static register(req,res){
			res.render('register')
		}

		static postRegister(req,res){
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

		static login(req,res){
			res.render('login')
		}

		


		
}

module.exports = Controller