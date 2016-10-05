var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema(
    {
        fewestGuesses: {
            type: Number,
            required: true
            
        }
    }
);

var Game = mongoose.model('Count', GameSchema);
module.exports = Game;

