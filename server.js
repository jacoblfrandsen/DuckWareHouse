const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser')


const dotenv = require('dotenv')
dotenv.config()

const indexRouter = require('./routes/index')
const inventoryRouter = require('./routes/inventory')

const PORT = 3000; 
const MONGODB_URL = process.env.MONGODB_URL

app.use(express.static('public')); 
app.use('/', indexRouter)
app.use('/inventory', inventoryRouter)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



app.use(express.json()); 

const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL)

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))

app.post('/pizza', (req, res) => {
    console.log(req.body); // Now it should log the parsed body, not undefined
    res.send(req.body); // This will echo back the parsed body
});

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 





