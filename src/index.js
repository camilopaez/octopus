const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const {mongoose} = require('./database')

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes

app.use('/api/topics', require(path.join(__dirname,'routes','topic_routes')));

//Static files

app.use(express.static(path.join(__dirname,'public')));

//Start server
app.listen(app.get('port'), () => {

    console.log(`server on port : ${app.get('port')}`);

})