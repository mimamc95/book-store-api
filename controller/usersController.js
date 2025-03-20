const { User } = require('../models')


// create function registerUser, return using request & response
const registerUser = async (req, res, next) => {
    try {
        // get request data from body
        const { name, email, password } = req.body
        const newUser = await User.create({
            name: name,
            email: email,
            password: password
        })

        // if successfully create, return response
        res.status(201).json({
            status: 'ok',
            data: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        })

        // error handler next
    } catch (error) {
        next(error)
    }
}

module.exports = { registerUser }