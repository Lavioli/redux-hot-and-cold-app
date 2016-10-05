var express = require('express');
var app = express();
// var Game = require('./models/Game');
// var mongoose = require('mongoose');

var bodyParser = require('body-parser');


//will require fewestGuesses from database and declare as a variable
app.use(express.static('build')); 

app.use(bodyParser.json());
var fewestGuesses=0;


app.get('/fewest-guesses', function(req, res) {
  res.json({guesses:fewestGuesses});

});

var count = 0; 
app.post('/fewest-guesses', function(req, res){

    return res.sendStatus(201).json({count: count});
   
})

app.listen(8080, function(){
    console.log("server running");
});