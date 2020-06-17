const express = require('express')

const app = express()

app.get('/time', (req, res, next) => {
    res.send(`Current time = ${Date.now()}`)
})

module.exports = app