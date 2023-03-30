const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../src/database/database');
//const db = require('../src/database/database');

const app = express();
//Initializations

//Settings

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
//Routes


//Starting the server
app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});

app.use("/api/login",require('./routes/login.routes'));