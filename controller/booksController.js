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
const createNewBook = async (req, res) => {

    try {
        // get request body
        const { title, description } = req.body

        const newBook = await Book.create({ title: title, description: description })

        res.status(201).json({
            status: 'ok',
            data: {
                id: newBook.id,
                title: newBook.title,
                description: newBook.description,
                createdAt: newBook.createdAt,
                updatedAt: newBook.updatedAt
            }
        })

    } catch (error) {
        console.log(error, '<<< Error create new book')
    }

}


// create result findAllBooks & getBookById, then export to router
module.exports = { findAllBooks, getBookById, createNewBook }