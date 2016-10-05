var redux = require('redux');
var React=require('react')
var connect = require('react-redux').connect;
var NewGameButton= require('./newGameButton');
var GuessInput= require('./guessInput');
var Feedback= require('./feedback');
var GuessList= require('./guessList');
var GuessCount= require('./guessCount');


var Game= function(props){
    return (
        <div className='game'>
            <h2>
                <Feedback 
                    currentFeedback={props.currentFeedback} 
                />
            </h2>
            {props.randomNumber}
            <GuessInput 
                randomNumber={props.randomNumber} 
                isActive={props.isActive}
                guess={props.guess}
            />
            <GuessCount count={props.count}/>
            <GuessList guess={props.guess} />
            <NewGameButton isActive={props.isActive}/>

        </div>
        );
}
var mapStateToProps = function(state, props) {
    return {
        randomNumber: state.randomNumber,
        guess: state.guess,
        currentFeedback: state.currentFeedback,
        isActive: state.isActive,
        count: state.count
    }
}

var Container = connect(mapStateToProps)(Game);

module.exports= Container;









//var createStore=redux.createStore;
//var gameReducer = require('../reducers/reducers').gameReducer;
//var repositoryReducer= require('./reducers').repositoryReducer;
//var actions = require('../actions/actions');
//var store=createStore(repositoryReducer);
//var store= createStore(gameReducer);
// store.dispatch(actions.addRepository('dd'));
// store.dispatch(actions.rateRepository('dd',3));
// store.dispatch(actions.addRepository('erty'));
// store.dispatch(actions.rateRepository('erty',10));

// store.dispatch(actions.makeAGuess(45));
// store.dispatch(actions.makeAGuess(25));
// store.dispatch(actions.isActive());
// store.dispatch(actions.currentFeedback(34));
// console.log(store.getState());

//<Feedback randomNumber={props.randomNumber} currentFeedback={props.currentFeedback}/>