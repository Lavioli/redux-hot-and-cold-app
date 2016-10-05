var React= require('react');
var should= require('chai').should();
var TestUtils = require('react-addons-test-utils');
var connect = require('react-redux').connect;
var Provider=require('react-redux').Provider;
var Feedback= require('../src/components/feedback');
var GuessInput= require('../src/components/guessInput');
var Game = require("../src/components/Game")
var GuessCount= require('../src/components/guessCount');


//REQUIRE
var createStore = require('redux').createStore;
var gameReducers= require('../src/reducers/reducers').gameReducer;
var store= createStore(gameReducers);

describe('Game component',function(){
    it('should render game props', function(){
        var renderer = TestUtils.createRenderer();
        renderer.render(<Game store={store}/>);
        var result = renderer.getRenderOutput();
        result.props.
        console.log(result)
    })  
});


// describe('Feedback component',function(){
//     it('should render feedback', function(){
//         var renderer = TestUtils.createRenderer();
//         renderer.render(<Feedback />);
//         var result = renderer.getRenderOutput();
//         result.props.className.should.equal('feedback');
//     })  
// });


// describe('GuessCount component',function(){
//     it('should render an input box', function(){
//         var renderer = TestUtils.createRenderer();
//         renderer.render(<GuessCount />);
//         var result = renderer.getRenderOutput();
        
//     })  
// });



//The app runs normally without passing a store to the GameInput(child) componenet. In the testing situation, a store must be passed to the component. index.js had the provider (which includes store), and should be passed in order to shallow render the componenents. Because GuessInput is a child component of Game, which is already running under the Provider, a store prop is needed to be included inside the GuessInput componenet. 

// describe('GuessInput component',function(){
//     it('should render an input box', function(){
//         var renderer = TestUtils.createRenderer();
//         renderer.render(<GuessInput store={store}/>);
//         var result = renderer.getRenderOutput();
//         console.log(result)
//     })  
// });