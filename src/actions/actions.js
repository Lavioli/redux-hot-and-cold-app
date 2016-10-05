//***************LIST OF ACTIONS**********
//Generates random number(Guess button)
//Generate new number and restart game (New Game)
//count # of guesses (Counter)
//displays if hot or cold(feedback)
//list of old guesses (Array)

var fetch =require('isomorphic-fetch');
var GUESS_NUMBER="GUESS";
var makeAGuess= function(guess){
    console.log('makeAGuess called', guess)
    return {
        type: GUESS_NUMBER,
        payload:guess
    }
}
var CURRENT_FEEDBACK="CURRENT_FEEDBACK";
var currentFeedback= function(feedback){
    return{
    type:CURRENT_FEEDBACK,
    payload: feedback
    }
    
} 

var IS_ACTIVE ='IS_ACTIVE'
var isActive = function(){
    return {
    type: IS_ACTIVE
        
    }
}

var RANDOM_NUMBER = "RANDOM_NUMBER ";
var randomNumber= function(){
    return{
        type: RANDOM_NUMBER
    }
}

var NEW_GAME = "NEW_GAME";
var newGame = function() {
    return {
        type: NEW_GAME
    }
}

var COUNT = "COUNT";
var count = function(number) {
    return {
        type: COUNT,
        payload: number
    }
}

var FETCH_SUBMIT = FETCH_SUBMIT;
var fetchSubmit = function() {
    var url='http://redux-michellen.c9users.io/fewest-guesses';
        fetch(url).then(function(res){
            console.log(res)
        })
    }

var FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
var fetchFewestGuesses= function(){
    var url='http://redux-michellen.c9users.io/fewest-guesses';
    return function(dispatch){
        
        fetch(url).then(function(res){
            if (res.status < 200 || res.status >= 300) {
                var error = new Error(res.statusText)
                error.res = res
                throw error;
            }
            return res;
        }).then(function(res){
            return res.json();
        }).then(function(data){
            var lowestNumber= data.lowestNumber;
            return dispatch(fetchFewestGuessesSuccess(lowestNumber))
        }).catch(function(error){
            return dispatch(fetchFewestGuessesError(error));
        });
    }
}

var FETCH_FEWEST_GUESSES_SUCCESS= 'FETCH_FEWEST_GUESSES_SUCCESS';
var fetchFewestGuessesSuccess= function(currentCount){
    return{
     type: FETCH_FEWEST_GUESSES_SUCCESS,
     payload: currentCount
    }
}
var FETCH_FEWEST_GUESSES_ERROR= 'FETCH_FEWEST_GUESSES_ERROR';
var fetchFewestGuessesError= function(error){
    return{
     type: FETCH_FEWEST_GUESSES_ERROR,
     payload: error
    }
}

exports.GUESS_NUMBER=GUESS_NUMBER;
exports.makeAGuess=makeAGuess;
exports.RANDOM_NUMBER=RANDOM_NUMBER;
exports.randomNumber=randomNumber;
exports.IS_ACTIVE=IS_ACTIVE;
exports.isActive=isActive;
exports.CURRENT_FEEDBACK=CURRENT_FEEDBACK;
exports.currentFeedback=currentFeedback;
exports.NEW_GAME=NEW_GAME;
exports.newGame=newGame;
exports.COUNT=COUNT;
exports.count=count;

exports.FETCH_FEWEST_GUESSES_ERROR=FETCH_FEWEST_GUESSES_ERROR;
exports.fetchFewestGuessesError=fetchFewestGuessesError;
exports.FETCH_FEWEST_GUESSES_SUCCESS=FETCH_FEWEST_GUESSES_SUCCESS;
exports.fetchFewestGuessesSuccess=fetchFewestGuessesSuccess;
exports.fetchFewestGuesses=fetchFewestGuesses;

exports.FETCH_SUBMIT=FETCH_SUBMIT;
exports.fetchSubmit=fetchSubmit;