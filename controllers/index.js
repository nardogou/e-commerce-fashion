const { Product, Category, User, UserProfile, Order } = require('../models')
const { Op } = require('sequelize')
const bcrypt = require('bcryptjs');


class Controller {
	static home(req, res) {
		const { search } = req.query
		const options = {
			include: 'Category',
			order: [['name', 'ASC']],
			where: {}
		}
		if (search) {
			options.where = {
				...options.where,
				name: {
					[Op.iLike]: `%${search}%`
				}
			}
		}

		Product.findAll(options)
			.then(products => {
				res.render('home', { products })
			})
			.catch(err => {
				res.send(err)
			})
	}

	static register(req, res) {
		res.render('register')
	}

	static postRegister(req, res) {
		const { firstName, lastName, phoneNumber, address, username, email, password } = req.body
		// const{} = req.body
		// console.log(req.body)
		User.create({ username, email, password })
			.then((user) => {
				// res.redirect('/login')
				return UserProfile.create({ firstName, lastName, phoneNumber, address, UserId: user.id })
			})
			.then(() => {
				res.redirect('/login')
			})
			.catch(err => {
				res.send(err)
			})
	}

	static login(req, res) {
		res.render('login')
	}
	static postLogin(req, res) {
		const { username, password } = req.body
		User.findOne({ where: { username } })
			.then(user => {
				if (user) {
					const isValidPassword = bcrypt.compareSync(password, user.password)
					if (isValidPassword) {

						req.session.UserId = user.id
						req.session.role = user.role
						console.log(req.session)
						console.log(user)
						return res.redirect('/')

					} else {
						const error = "Invalid Input Username or Password"
						return res.redirect(`/login?error=${error}`)
					}
				} else {
					const error = "Invalid Input Username or Password"
					return res.redirect(`/login?error=${error}`)
				}
			})
			.catch(err => res.send(err))
	}
	static getLogout(req, res) {
		req.session.destroy((err) => {
			if (err) {
				res.send(err)
			} else {
				res.redirect('/login')
			}
		})
	}


	static addProduct(req, res) {
		Category.findAll()
			.then(categories => {
				res.render('addProduct', { categories })
			})
	}
	static saveProduct(req, res) {
		const { name, description, price, stock, image, CategoryId } = req.body
		Product.create({ name, description, price, stock, image, CategoryId })
			.then(result => {
				res.redirect('/')
			})
			.catch(err => {
				res.send(err)
			})
	}

	static detailProduct(req, res) {
		const { id } = req.params
		Product.findOne({
			where: {
				id: `${id}`
			}
		})
			.then(products => {
				res.render('detailProduct', { products })
			})
			.catch(err => {
				res.send(err)
			})
	}

	static checkoutProduct(req, res) {
		const { productId } = req.params
		Order.findAll({
			where: {
				include: ['Product', 'User'],
				id: `${productId}`
			}
		})
			.then(orders => {
				res.send(orders)
				// res.render('checkoutOrder',{orders})
			})
			.catch(err => {
				res.send(err)
			})
	}




}

module.exports = Controller