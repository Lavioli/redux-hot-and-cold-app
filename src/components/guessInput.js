var React = require('react');
var connect =require('react-redux').connect;
var actions= require('../actions/actions');
var Feedback = require('./feedback');

var GuessInput= React.createClass({
    addGuess:function(event){
        event.preventDefault();
        var input = parseInt(this.refs.number.value);
        this.props.dispatch(actions.makeAGuess(input));
        this.refs.number.value ='';
        var number = this.props.guess.length
        this.props.dispatch(actions.count(number));
        this.props.dispatch(actions.fetchSubmit());
    }, 
    
    
    startNewGame: function(event) {
      event.preventDefault();
     this.props.dispatch(actions.newGame()); //it should reset the initial state to default.
    },
    
    render:function(props){
        // console.log(this.props)
        if(this.props.isActive === true) {
            return (
                <div className="input">
                    <form onSubmit={this.addGuess}>
                        <input type='text' placeholder='Enter your Guess' maxLength="3" ref='number' />
                            &nbsp;
                        <input type='submit' value='Guess'/>
                    </form>
                    
                </div>
            );
        } else {
            return (
                <div className="input">
                    <form onSubmit={this.addGuess}>
                        <input type='text' placeholder='Disabled' ref='number' disabled="true" />
                            &nbsp;
                        <input type='submit' value='Guess' disabled="true" />
                    </form>
                    
                </div>
            );
        }
    
    }
});

// var mapDispatchToProps = function(dispatch) {
//     return {
//         onAddSubmit: function(guessNumber) {
//             dispatch(actions.makeAGuess(guessNumber));
//         }
//     }
  
// }


// var mapStateToProps = function(state, props) {
//     return {
//         randomNumber: state.randomNumber
//     }
// }

var Container= connect()(GuessInput);
module.exports= Container;

