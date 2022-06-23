const {Product,Category,User,UserProfile} = require('../models')
const {Op} = require('sequelize')
const { resolveInclude } = require('ejs')
class Controller{
    static home(req,res){
			const {search,sortDirection} = req.query
			const options = {
				include: 'Category',
				order: [['name','ASC']],
				where:{}  
			}
			if(search){
				options.where = {
					...options.where,
					name: {
						[Op.iLike]: `%${search}%`
					}
				}
			}
		
			Product.findAll(options)
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
			// console.log(req.body)
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

		static addProduct(req,res){
			Category.findAll()
			.then(categories =>{
				res.render('addProduct',{categories})
			})
		}
		static saveProduct(req,res){
			const{name,description,price,stock,image,CategoryId} = req.body
			Product.create({name,description,price,stock,image,CategoryId})
			.then(result=>{
				res.redirect('/')
			})
			.catch(err=>{
				res.send(err)
			})
		}

		static detailProduct(req,res){
			const {id} = req.params
      Product.findOne({
        where: {
          id:`${id}`
        }
      })
			.then(products =>{
        res.render('detailProduct',{products})
      })
			.catch(err=>{
				res.send(err)
			})
		}
		
		static checkoutProduct(req,res){
			res.render('checkout')
		}


		
}

module.exports = Controller