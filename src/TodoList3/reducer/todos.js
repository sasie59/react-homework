import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO } from '../actions';

export default function todos(state=[], action) {
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
        newState[action.index].completed = state[action.index].completed;
        return newState;
      case REMOVE_TODO:
        return state.filter(index => index !=action.index);
      default:
        return state;
  }
}