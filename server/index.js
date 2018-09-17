'use strict'

const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./router')(app)

app.listen(process.env.PORT, () => console.log('Weather application up on port', process.env.PORT))

module.exports = app
