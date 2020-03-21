import { combineReducers } from 'redux';
import  todos  from './todos';
import  visibilityFilter  from './visbilityFilter';

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;