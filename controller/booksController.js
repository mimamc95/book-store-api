// array data was representation as database
const books = [
    { id: 1, title: 'node.js', description: 'learning node js for beginner' },
    { id: 2, title: 'next.js', description: 'learning next js for beginner' },
    { id: 3, title: 'js', description: 'learning js for beginner' },
    { id: 4, title: 'python', description: 'learning python for beginner' },
    { id: 5, title: 'C#', description: 'learning C# for beginner' },
    { id: 6, title: 'express.js', description: 'learning express js for beginner' },
]

// create function findAllBooks, return using request & response
const findAllBooks = (req, res) => {
    // get data from database
    const data = books

    // provide response data in json format
    const result = {
        status: 'ok',
        data: data
    }

    res.json({ result })

}

//create function getBookById
const getBookById = (req, res) => {
    // get its req params
    const { id } = req.params

    let book
    // processing data or loop data books
    for (let i = 0; i < books.length; i++) {

        // looping, if books with index [n] === id from req.params, so save on variable book
        if (books[i].id === Number(id)) {
            book = books[i]
        }
    }

    // handling error response, if id on req.params is not found 
    if (book === undefined) {
        return res.status(404).json({ status: 'failed', message: `data book with id ${id} is not found` })
    }

    // provide a response to client
    res.json({ status: 'ok', data: book })
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