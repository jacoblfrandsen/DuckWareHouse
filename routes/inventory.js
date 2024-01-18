const express = require('express')
const router = express.Router()
const Duck = require('../models/inventory')
const bodyParser = require('body-parser')
const urlParser = bodyParser.urlencoded({extended: false})
router.use(bodyParser.json())
router.use(urlParser)

router.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/inventory/index.html')
})

router.get('/new', (req, res) => {
    res.sendFile(__dirname + '/views/inventory/new.html', {duck: new Duck()})
})

//create duck
router.post('/add', (req, res) => {
    console.log('getting called', req.body)
    const duck = new Duck({
        id: req.body.id
    })
    duck.save().then((newDuck) => {
        res.sendFile(__dirname + '/views/inventory/index.html')
    }).catch((err) => {res.sendFile(__dirname + '/views/inventory/new.html')})
    // res.send(req.body.id)
})



module.exports = router