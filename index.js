const express = require('express')

const app = express()
const port = 3333

// array data was representation as database
const books = [
    { id: 1, title: 'node.js', description: 'learning node js for beginner' },
    { id: 2, title: 'next.js', description: 'learning next js for beginner' },
    { id: 3, title: 'js', description: 'learning js for beginner' },
    { id: 4, title: 'python', description: 'learning python for beginner' },
    { id: 5, title: 'C#', description: 'learning C# for beginner' },
    { id: 6, title: 'express.js', description: 'learning express js for beginner' },
]

// Tampilan di browser

//  GET, POST, PUT, PATCH, DELETE
app.get('/', (req, res) => {

    // create content type json for produce api
    res.json({ message: 'hallo ini response dari json response' })

    // create content type send for pruduce html
    // res.send('hello world, ini aku sedang belajar express JS')
})

// create endpoint /books
app.get('/books', (req, res) => {
    // get data from database
    const data = books

    // provide response data in json format
    const result = {
        status: 'ok',
        data: data
    }

    res.json({ result })
})

// get data from books database array/json based on id
app.get('/books/:id', (req, res) => {
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

    // provide a response to client
    res.json({ status: 'ok', data: book })
})

app.get('/users/:id', (req, res) => {

    const { id } = req.params

    // console.log(req.params)
    res.send(`Ini response dari endpoint /users dengan id ${id}`)
})

// Tampilan di terminal
app.listen(port, () => console.info(`server localhost running di port ${port}`))