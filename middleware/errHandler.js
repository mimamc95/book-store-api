function errHandler(err, req, res, next) {

    // output error on array
    let errors = []
    let statusCode = 500

    console.log(err, '<<< Error di errHandler')

    // read error was detected
    switch (err.name) {
        // when detected error from Sequelize Validation Error
        case 'SequelizeValidationError':
            err.errors.forEach(el => {
                errors.push(el.message)
            })
            statusCode = 400
            break
        // when there's an error undefined
        default:
            errors.push(err.msh || 'Internal server error')
            statusCode = err.statusCode || 500
    }
    // after get data error & will return to client, call parameter response
    res.status(statusCode).json({
        status: 'failed',
        errors: errors
    })
}

module.exports = errHandler