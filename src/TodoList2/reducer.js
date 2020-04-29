import {combineReducers } from 'redux';
import {
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
} from './actions';

const initialVisibilityFilters = VisibilityFilters.SHOW_ALL;

/*
{
  VisibilityFilters: 'SHOW_ALL',
  todos: [
    { text: 'blablabla', completed: true },
    { text: 'blablabla', completed: false },
  ],
};
*/

function visibilityFilters(state = initialVisibilityFilters, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return [
      ...state,
      { text: action.text, completed: false }
    ];
  case TOGGLE_TODO:
    const newState = state.slice();
    newState[action.index].completed = !newState[action.index].completed;
    return newState;
    // [a,b,c,d,e,f]
    // [a, b][c][d,e,f]
    return [
      state.slice(0, action.index),
      {
        text: state[action.index].text,
        completed: !state[action.index].completed,
      },
      state.slice(action.index + 1),
    ];
  case REMOVE_TODO:
    return state.filter((todo, index) => index !== action.index);
  
  default:
    return state;
  }
}

export default combineReducers({visibilityFilters, todos});