const { findAllBooks, getBookById, createNewBook } = require('../controller/booksController')

const router = require('express').Router()

// create router endpoint /books with handler function findAllBooks on controller
router.get('/books', findAllBooks)

// create router endpoint /books with handler function getBookById on controller
router.get('/books/:id', getBookById)

// create router endpoint /books to create new data book with handler function ... on controller
router.post('/books', createNewBook)

module.exports = router
