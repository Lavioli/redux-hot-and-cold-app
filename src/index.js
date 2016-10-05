var React= require('react');
var ReactDOM = require('react-dom');
var createStore = require('redux').createStore;
var Provider=require('react-redux').Provider;
var redux = require('redux');
var actions=require('./actions/actions');

var gameReducers= require('./reducers/reducers').gameReducer;
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var store= createStore(gameReducers, applyMiddleware(thunk));
var Game= require('./components/Game');





ReactDOM.render(
                <Provider store={store}>
                    <Game />
                </Provider>,
                document.getElementById('app')
                );

// store.dispatch(actions.fetchFewestGuessesSuccess(4));


// // store.dispatch(actions.fetch)
// console.log(store.getState())

module.exports= store;