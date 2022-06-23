const { Category, Order, Product, User, UserProfile } = require('../models');
const bcrypt = require('bcryptjs');

class Controller {
    static Home(req, res) {
        res.render('home')
    }


    static register(req, res) {
        res.render('register')
    }

    static postRegister(req, res) {
        const { firstName, lastName, phoneNumber, address, username, email, password } = req.body
        // const{} = req.body
        console.log(req.body)
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
}



module.exports = Controller