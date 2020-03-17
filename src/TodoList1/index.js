import React, { Component } from 'react';
import todoApp from './reducer';
import { Provider } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  setVisibilityFilter,
  VisibilityFilters,
} from './actions';

import App from './App';
import {createStore} from 'redux';

let store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ); 

export default class TodoList1 extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }  
}


// console.log(store.getState());
// store.dispatch(addTodo('item 1'));
// store.dispatch(addTodo('item 2'));
// store.dispatch(addTodo('item 3'));
// store.dispatch(addTodo('item 4'));
// store.dispatch(removeTodo(0));
// store.dispatch(toggleTodo(0));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// console.warn(store.getState());




// const ADD_TODO = 'ADD_TODO'; 

// const addTodo = (text) => {
//   return {
//     type: ADD_TODO,
//     text,
//   };
// }; 

// const boundAddTodo = (text) => {
// store.dispatch(addTodo(text));
// };

// boundAddTodo('text1');
