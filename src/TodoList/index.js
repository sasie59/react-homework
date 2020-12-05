import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import * as xxx  from './actions/visibilityFilter';
// import { ADD_TODO, addTodo, TOGGLE_TODO, toggleTodo } from './actions/todos';
import reducers from './reducers';
import App from './App';
const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
// store.dispatch(xxx.visibilityFilter(xxx.FINISH));
// console.warn(store.getState());
// store.dispatch(visibilityFilter(xxx.ALL));
// store.dispatch(addTodo('aaa'));
// store.dispatch(addTodo('bbb'));
// const { todos : list } = store.getState();
// console.warn(store.getState());
// store.dispatch(toggleTodo(list[0].id));

// import * as x from 'xxxx';
// import { a, b, c,... }
// x.a

export default class TodoList extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

