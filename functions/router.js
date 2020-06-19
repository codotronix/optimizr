const router = require('express').Router()

const minifyJSController = require('./be-src/controllers/minifyJSController')

router.post('/api/minify-js', minifyJSController)


module.exports = router