//  create models Book
const { ValidationErrorItem } = require('sequelize')
const { Book } = require('../models')

// create function findAllBooks, return using request & response
const findAllBooks = async (req, res, next) => {
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
        next(error)

    }
}

//create function getBookById
const getBookById = async (req, res, next) => {

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
        next(error)
    }

}

// create function createNewBook
const createNewBook = async (req, res, next) => {

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
        next(error)
    }

}

// create method for update data,using asynchronous & res req for handler
const updateBook = async (req, res, next) => {
    try {
        //  get request params to get data book by id
        const { id } = req.params

        //  get request req.body title & description for updated
        const { title, description } = req.body

        // connect and find data book by id
        const book = await Book.findByPk(id)
        // if book not found
        if (!book) {
            return res.status(404).json({
                status: 'failed',
                message: `data book with id ${id} is not exist`
            })
        }

        // after get data success, update this data
        book.title = title
        book.description = description
        book.updatedAt = new Date()

        // validate & save updated data
        await book.validate()
        await book.save()

        // return response
        res.json({
            status: 'ok',
            data: {
                id: book.id,
                title: book.title,
                description: book.description,
                createdAt: book.createdAt,
                updatedAt: book.updatedAt
            }
        })

    } catch (error) {
        next(error)
    }
}

// create method delete
const destroyBook = async (req, res, next) => {
    try {
        //  get request params to get data book by id
        const { id } = req.params

        // connect and find data book by id
        const book = await Book.findByPk(id)
        // if book not found
        if (!book) {
            return res.status(404).json({
                status: 'failed',
                message: `data book with id ${id} is not exist`
            })
        }

        // if book founded, destroy
        book.destroy()

        // return response
        res.json({
            status: 'ok',
            message: `success delete book with id ${id}`
        })


    } catch (error) {
        next(error)
    }
}


// create result findAllBooks & getBookById, then export to router
module.exports = { findAllBooks, getBookById, createNewBook, updateBook, destroyBook }