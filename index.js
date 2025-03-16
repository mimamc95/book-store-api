const express = require('express')

const app = express()
const port = 3333
const router = require('./routes/index')

app.use(express.json())
app.use(router)



// Tampilan di browser

//  GET, POST, PUT, PATCH, DELETE
app.get('/', (req, res) => {

    // create content type json for produce api
    res.json({ message: 'hallo ini response dari json response' })

    // create content type send for pruduce html
    // res.send('hello world, ini aku sedang belajar express JS')
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

    // handling error response, if id on req.params is not found 
    if (book === undefined) {
        return res.status(404).json({ status: 'failed', message: `data book with id ${id} is not found` })
    }

    // provide a response to client
    res.json({ status: 'ok', data: book })
})

//  endpoint /books with post
app.post('/books', (req, res) => {
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
})


// Tampilan di terminal
app.listen(port, () => console.info(`server localhost running di port ${port}`))