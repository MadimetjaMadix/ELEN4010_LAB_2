const express = require('express')
const app = express()

// loading body-parser
const bodyParser = require('body-parser')

// loading our routers
const mainRouter = require('./mainRouter')
const todoRouter = require('./classRoutes.js')

// tell express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mounting our routers
app.use('/', mainRouter)
app.use('/class', todoRouter)

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port 3000')
