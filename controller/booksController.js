//  create models Book
const { Book } = require('../models')

// create function findAllBooks, return using request & response
const findAllBooks = async (req, res) => {
    try {
        // request data from database
        const data = await Book.findAll()
        const result = {
            status: 'ok',
            data: data
        }

        // response data from database
        res.json(result)

    } catch (error) {
        console.log(error, '<<< Error find all books')

    }
}

//create function getBookById
const getBookById = async (req, res) => {

    try {
        const { id } = req.params

        const data = await Book.findByPk(id)
        console.log(data)
        if (data === null) {
            return res.status(404).json({
                status: 'failed',
                message: `data book with id ${id} is not found`
            })
        }

        // if successfully
        res.json({
            status: 'ok',
            data: data
        })

    } catch (error) {
        console.log(error, '<<< Error find book by id')
    }
     
}

// create function createNewBook
const createNewBook = (req, res) => {
    // get request body
    const { title, description } = req.body
    // debug
    console.log(title, description)

    //  get new id
    const lastItemBookId = books[books.length - 1].id
    const newIdBook = lastItemBookId + 1

    // add new book
    const newBookData = { id: newIdBook, title: title, description: description }
    books.push(newBookData)

    // return response to client
    res.status(201).json({ status: 'ok', message: 'new book data successfully added', data: newBookData })
}


// create result findAllBooks & getBookById, then export to router
module.exports = { findAllBooks, getBookById, createNewBook }