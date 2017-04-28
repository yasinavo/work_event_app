const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const WorkEvent = require('./workevents.js');

// set up express app
const app = express();

//Middlewear
app.use(express.static('public'));
app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));



//error handling middlewear
app.use(function (err,req,res,next) {
    //console.log'(err);
    res.status(422).send({error: err.message});
});


//Listen for request
app.listen(4000,function () {
    console.log('now listening for request');
});