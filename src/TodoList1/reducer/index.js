import { combineReducers } from "redux";
import todos from './todos';
import visbilityFilter from './visbilityFilter';

const todoApp = combineReducers({ 
  visbilityFilter,
  todos
});

export default todoApp;
