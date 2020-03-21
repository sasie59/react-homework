import React, { Component } from 'react';
import todoApp from './reducer';

import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default class todoList3 extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
