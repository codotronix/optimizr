const express = require('express')
const router = require('./router')

const app = express()
app.use(express.json())
app.use(router)

app.get('/time', (req, res, next) => {
    res.send(`Current time = ${Date.now()}`)
})

module.exports = app