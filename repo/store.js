var redux = require('redux');
var createStore=redux.createStore;
var actions= require('./actions_repo');
var Reducer= require('./reducers_repo');
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;
var store=createStore(Reducer.repositoryReducer, applyMiddleware(thunk));



// store.dispatch(actions.addRepository('dd'));

// store.dispatch(actions.fetchDescriptionSuccess('dd','this is the one'));
//  store.dispatch(actions.fetchDescriptionError('dd'));

// console.log(store.getState());

module.exports = store;