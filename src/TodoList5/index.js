import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './App';

import { visibilityFilter, ALL, FINISH, UNFINISH } from './actions/visibilityFilter';
import { addTodo, toggleTodo, removeTodo } from './actions/todos';
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => console.warn((store.getState())));
// store.dispatch(addTodo('aaa'));
// store.dispatch(addTodo('bbb'));
// store.dispatch(addTodo('ccc'));
// const { todos: list } = store.getState();
// console.warn(list);
// console.warn(list[1].completed);
// store.dispatch(toggleTodo(list[1].id));
// store.dispatch(removeTodo(list[0].id));

// store.dispatch(visibilityFilter(FINISH));
// store.dispatch(visibilityFilter(UNFINISH));
// 


export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
