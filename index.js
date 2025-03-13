const express = require('express')

const app = express()
const port = 3333


// Tampilan di browser
app.get('/', (req, res) => {
    res.send ('hello world, ini aku sedang belajar express JS')
})


// Tampilan di terminal
app.listen(port, () => console.info(`server localhost running di port ${port}`))