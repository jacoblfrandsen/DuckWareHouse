const express = require('express'); 
const app = express(); 
const expressLayouts = require ('express-ejs-layouts')

const dotenv = require('dotenv')
dotenv.config()
const indexRouter = require('./routes/index')
const PORT = 3000; 
const MONGODB_URL = process.env.MONGODB_URL


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public')); 
app.use('/', indexRouter)

// app.use(express.json()); 

const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL)

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))


app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 

app.get('/get-ducks', (req, res)=>{ 
    const data = {
        message: 'Getting ducks',
        ducks: {
            id: 1,
            color: 'red',
            size: "Large",
            quantity: 10
        },
        status: 'success'
    };
    res.json(data);
});

app.post('/add-duck', (req, res)=>{ 
    const {duck} = req.body; 
      
    const responseObject = {
        message: `Duck added successfully`,
        addedDuck: duck
    };
    
    // Send the JSON response
    res.json(responseObject); 
})


