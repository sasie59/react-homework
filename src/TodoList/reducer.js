import { combineReducers } from 'redux';

import {
  VisibilityFilters,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
} from './actions';

const iniialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};

// visibility reducer
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// todos reducer
function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ];
    case TOGGLE_TODO:
      console.warn("toggle todo!");
      return state;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;