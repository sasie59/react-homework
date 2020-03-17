import {
    VisibilityFilters,
    SET_VISIBILITY_FILTER,ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
  } from "./actions";
import { combineReducers } from "redux";

const initialState = {
  visbilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function visbilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

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
        const newState = [...state];
        newState[action.index].completed = !state[action.index].completed;
        return state;
      case REMOVE_TODO:
        return state.filter((todo, index) => index != action.index);
      default:
        return state;
  }
}

const todoApp = combineReducers({ 
  visbilityFilter,
  todos
});

export default todoApp;

