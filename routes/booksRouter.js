// import router
const router = require('express').Router()
const { findAllBooks, getBookById, createNewBook, updateBook, destroyBook } = require('../controller/booksController')


// create router endpoint /books with handler function findAllBooks on controller
router.get('/books', findAllBooks)

// create router endpoint /books with handler function getBookById on controller
router.get('/books/:id', getBookById)

// create router endpoint /books to create new data book with handler function ... on controller
router.post('/books', createNewBook)

// create router endpoint /books for update
router.patch('/books/:id', updateBook)

// create router endpoint /books to delete data book with 
router.delete('/books/:id', destroyBook)


module.exports = router