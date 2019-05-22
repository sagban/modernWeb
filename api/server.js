const express = require("express");
const morgan = require("morgan");
const path = require('path');
const bodyParser = require('body-parser');

let app = express();


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//NodeJS logger helps in debugging
app.use(morgan('dev'));


// let models = require("./app/models");
let authRoute = require('./app/routes/auth.js')(app);

app.listen(3000, function(){
  console.log("Server running on port 3000");
});

