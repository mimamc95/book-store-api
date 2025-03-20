const router = require('express').Router()
const booksRouter = require('./booksRouter')


// create router pattern api/v1, api/v1 will accessed and then all content router on booksRouter will called & used
router.use("/api/v1", booksRouter) //books router endpoint 
// router.use("/api/v1", authorsRouter) 


module.exports = router
