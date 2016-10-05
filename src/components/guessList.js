var React = require('react');
var connect = require('react-redux');
var actions=require('../actions/actions');

var GuessNumber= function(props){
    return (<li>{props.numbers}</li>)
}

var GuessList= function(props){
    var guessList= props.guess.map(function(element,index){
        return (<GuessNumber numbers={element} key={index} />)
    })
    return (<ul id="guessList" className="guessBox">{guessList}</ul>);
}

module.exports= GuessList;
