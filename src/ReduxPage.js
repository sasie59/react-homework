import React, { Component } from 'react';
import { createStore } from 'redux';

export default class ReduxPage extends Component {
  render() {
    return (
      <div>
        ReduxPage
      </div>
    )
  }
}


// reducer
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => {
  console.warn("目前的狀態", store.getState());
});

console.warn(store.getState());

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });