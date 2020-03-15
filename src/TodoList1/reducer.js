import { VisibilityFilters, SET_VISIBILITY_FILTER,ADD_TODO } from "./actions";
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
      default:
        return state;
  }
}

const todoApp = combineReducers({ 
  visbilityFilter,
  todos
});

export default todoApp;

