var React = require('react');
var connect =require('react-redux').connect;
var actions= require('../actions/actions');

var NewGameButton = React.createClass({
    startNewGame: function(event) {
        event.preventDefault();
        console.log(this.props)
        this.props.dispatch(actions.newGame());
    },
    render: function(props) {
        if(this.props.isActive === false) {
            return (
                <form onSubmit={this.startNewGame}>
                    <input type='submit' value='New Game' />
                </form>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    
});


var Container= connect()(NewGameButton);

module.exports= Container;