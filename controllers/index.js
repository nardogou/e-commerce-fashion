const {Product,Category} = require('../models')
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
			
		}

		static login(req,res){
			res.render('login')
		}

		


		
}

module.exports = Controller