const express = require('express')

const app = express()
const port = 3333
const router = require('./routes/index')

app.use(express.json())
app.use(router)

/* Tampilan di browser
*/

//  GET, POST, PUT, PATCH, DELETE
app.get('/', (req, res) => {

    // create content type json for produce api
    res.json({ message: 'hallo ini response dari json response' })

    // create content type send for pruduce html
    // res.send('hello world, ini aku sedang belajar express JS')
})


// Tampilan di terminal
app.listen(port, () => console.info(`server localhost running di port ${port}`))