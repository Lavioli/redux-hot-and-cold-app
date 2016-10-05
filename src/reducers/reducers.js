var actions = require("../actions/actions");
var RANDOM_NUMBER=actions.RANDOM_NUMBER;
var IS_ACTIVE=actions.IS_ACTIVE;
var CURRENT_FEEDBACK=actions.CURRENT_FEEDBACK;
var GUESS_NUMBER=actions.GUESS_NUMBER; 
var NEW_GAME=actions.NEW_GAME;
var COUNT=actions.COUNT;
var FETCH_FEWEST_GUESSES_SUCCESS=actions.FETCH_FEWEST_GUESSES_SUCCESS;
var FETCH_FEWEST_GUESSES_ERROR=actions.FETCH_FEWEST_GUESSES_ERROR;

var FETCH_SUBMIT=actions.FETCH_SUBMIT;

var InitialGameState = {
                            guess: [],    
                            isActive:true,
                            currentFeedback:'Make a guess',
                            randomNumber:(Math.floor(Math.random()*100)+1),
                            count: 0,
                            };
                            
var gameReducer = function (state, action) {
    state = state|| InitialGameState;
    
    switch(action.type){
        case RANDOM_NUMBER: 
            var randomNumber = (Math.floor(Math.random()*100)+1);
            
            var newState= Object.assign({},state, {randomNumber:randomNumber});
            
            return newState;
            
        case GUESS_NUMBER:
            
            if (typeof action.payload !== 'number' ||  isNaN(action.payload)){
                return Object.assign({}, state, {currentFeedback: 'Only numbers allowed!!'});
            } else if(action.payload > 100){
                return Object.assign({}, state, {currentFeedback: 'Please enter numbers from 1 to 100 only!'});
            }
            
            for( var i = 0; i<state.guess.length; i++){
                if(state.guess[i]=== action.payload) {
                    return Object.assign({}, state, {currentFeedback: 'This number has been guessed previously!'});
                }
            }
            var feedback=checkFeedback(state.randomNumber,action.payload);
            var newGuess=state.guess.concat(action.payload);
            var isActive=state.isActive;
            if (feedback=== "Congrats, you got it!") {
               
               isActive = false; 
               
               
               
            }
            var newState=Object.assign({},state, {guess:newGuess, currentFeedback:feedback, isActive: isActive});
            return newState;
        
        case CURRENT_FEEDBACK:
                var newState=Object.assign({},state,{currentFeedback:action.payload});
            
            return newState;
            
        case IS_ACTIVE:
              if(state.currentFeedback=== "Congrats, you got it!"){
                console.log('isactive should be false');
                var newState=Object.assign({},state,{isActive:false});  
            }
            else{
            var newState= Object.assign({},state, {isActive:true});
            }
            return newState;
        
        case NEW_GAME:
            var newRandomNumber = (Math.floor(Math.random()*100)+1);
            var newState= Object.assign({},state, InitialGameState, {randomNumber: newRandomNumber});
            return newState;
            
        case COUNT:
            var guessCount = state.guess.length;
            var newState= Object.assign({},state, {count: guessCount});
            return newState;
       
            
        case FETCH_FEWEST_GUESSES_SUCCESS:
            //if state.count === actions.payload
            if(state.currentFeedback=== "Congrats, you got it!"){
               if(state.count < actions.payload || actions.payload === 0 ) {
                   //update lowestCount
                   var newLowestCount = state.count;
                   var newState = Object.assign({},state, {lowestCount: newLowestCount});
                   //DO POST REQUEST TO UPDATE HERE, should be able to update database with state.lowestCount
                return newState; 
               }
                 
            }
            return state;
        case FETCH_FEWEST_GUESSES_ERROR:
            throw new Error('Cannot find lowest guess count');
        
        case FETCH_SUBMIT:
            console.log('submit')
        
         default: 
            return state;
    }
}

// var mapStateToProps = function(state, props) {
//     return {
//         guess: state.guess,
//         currentFeedback: state.currentFeedback,
//         randomNumber: state.randomNumber
//     }
// }

exports.gameReducer=gameReducer;


                            
function checkFeedback(randomNumber,userGuess) {
		if (Math.abs(randomNumber - userGuess) == 0) {
			return "Congrats, you got it!";
		} else if (Math.abs(randomNumber - userGuess) <= 5) {
			return "Getting real hot in here";
		} else if (Math.abs(randomNumber - userGuess) <= 10){
			return "Getting hotter";
		} else if (Math.abs(randomNumber - userGuess)>=10 && Math.abs(randomNumber - userGuess) <= 20) {
			return "Little warm";
		} else if (Math.abs(randomNumber - userGuess)>=20 && Math.abs(randomNumber - userGuess) <= 30) {
			return "Brr.. its cold";
		} else if (Math.abs(randomNumber - userGuess)>=30 && Math.abs(randomNumber - userGuess) <= 40) {
			return "Yeah, I'm going to need a jacket";
		} else {
			return "Frozen.";
		}
}