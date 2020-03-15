import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import App from './App';

import todoApp from './reducer';

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

export default class TodoList extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider> 
    );
  }
}

/*

console.log(store.getState());
store.dispatch(addTodo('item 1'));
store.dispatch(addTodo('item 2'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

console.log(store.getState());
*/
/*
const ADD_TODO = 'ADD_TODO';

const addTodo = function(text) {
  return {
    type: ADD_TODO,
    text,
  }
}
*/

/*
const boundAddTodo = function(text) {
  store.dispatch(addTodo(text));
}

boundAddTodo('todo1');
*/

// full action object
/**
 * store.dispatch({ type: 'INCREMENT' })
 * store.dispatch({ type: ADD_TODO, text: 'todo1' })
 * store.dispatch(addTodo('todo1'))
 * store.dispatch(addTodo('todo2'))
 */