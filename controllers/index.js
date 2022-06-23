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
		
}

module.exports = Controller