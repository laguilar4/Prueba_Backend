const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../src/database/database');

const app = express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

//Starting the server
app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});
//Routes
app.use("/api/login",require('./routes/login.routes'));
app.use("/api/movie",require('./routes/movie.routes'));