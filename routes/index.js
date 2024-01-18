const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: false}))

router.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/layout/index.html')
})

module.exports = router