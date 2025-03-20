// import router
const router = require('express').Router()
// const { findAllBooks, getBookById, createNewBook, updateBook, destroyBook } = require('../controller/booksController')

const { registerUser } = require("../controller/usersController")

router.get('/', (req, res) => {
    res.send('Ini endpoint untuk get semua users')
})// api/v1/users

router.post('/register', registerUser)// api/v1/users

// create router endpoint /books with handler function findAllBooks on controller
// router.get('/', findAllBooks)

// create router endpoint /books with handler function getBookById on controller
// router.get('/, getBookById)

// create router endpoint /books to create new data book with handler function ... on controller
// router.post('/', createNewBook)

// create router endpoint /books for update
// router.patch('/', updateBook)

// create router endpoint /books to delete data book with 
// router.delete('/', destroyBook)


module.exports = router