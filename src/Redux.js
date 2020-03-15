import React, { Component } from 'react';
import { createStore } from 'redux';

export default class Redux extends Component {
  render() {
    return (
      <div>
        Redux
      </div>
    ); 
  }
}

function sum(state = 1, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'less':
      return state - 1;
    case 'pow':
      return state * state;
    default:
      return state;
  }
}

let store = createStore(sum);

store.subscribe(() => {
  console.warn('目前的總和', store.getState());
});

/*
console.warn(store.getState());

store.dispatch({ type: 'add' });
store.dispatch({ type: 'pow' });
store.dispatch({ type: 'less' });
store.dispatch({ type: 'pow' });
store.dispatch({ type: 'add' });
store.dispatch({ type: 'pow' });

*/
