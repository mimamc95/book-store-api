const { findAllBooks, getBookById } = require('../controller/booksController')

const router = require('express').Router()

// create route endpoint /books with handler function findAllBooks on controller
router.get('/books', findAllBooks)

// create route endpoint /books with handler function getBookById on controller
router.get('/books/:id', getBookById)

module.exports = router
