const { findAllBooks } = require('../controller/booksController')

const router = require('express').Router()

// create route endpoint /books & handler req, res
router.get('/books', findAllBooks)

module.exports = router
