const UglifyJS = require("uglify-es")

const minifyJSController = (req, res, next) => {
    try {
        const { code } = req.body
        const result = UglifyJS.minify(code)
        // res.send(JSON.stringify(req.params))
        res.json({
            result
        })
    }
    catch (error) {
        res.json({
            result: { error }
        })
    }
    
}

module.exports = minifyJSController