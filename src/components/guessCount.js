var React = require('react');
var connect = require('react-redux');
var actions=require('../actions/actions');

var GuessCount= function(props){
    return (
            <div id="guessCount" className="guessCount">
                <p>Guess #<span id="count">{props.count}</span></p>
            </div>
            );
}

module.exports= GuessCount;
