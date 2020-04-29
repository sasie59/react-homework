import React, { Component } from 'react';
import { createStore} from 'redux';
import reducers from './reducers';
import {visibilityFilter, ALL, FINISH, UNFINISH} from './actions/visibilityFilter';
import { addTodo, toggleTodo,removeTodo } from './actions/todos';


const store = createStore(reducers);

store.subscribe(() => console.warn(store.getState()));
// store.dispatch(visibilityFilter(ALL));
// store.dispatch(visibilityFilter(FINISH));
// store.dispatch(visibilityFilter(UNFINISH));
store.dispatch(addTodo('aaa'));
store.dispatch(addTodo('bbb'));
store.dispatch(addTodo('ccc'));

// store.dispatch(toggleTodo(0));
// 會報錯
// store.dispatch(removeTodo(0));
// 這邊放的就不能是index 要是id了?





export default class TodoList4 extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
