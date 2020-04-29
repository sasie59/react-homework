import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, } from '../actions/todos.js';

export default function todos(state= [], action) {
  switch(action.type){
  case ADD_TODO:
    return [
      ...state,
      {
        id: Math.random(),
        text: action.text,
        completed: false
      }
    ];

  case TOGGLE_TODO:
    const newState = [...state];
    const toggleIndex = newState.findIndex(todo => todo.id === action.id);
    newState[toggleIndex].completed = !state[toggleIndex].completed;
    return newState;

  case REMOVE_TODO:
    const removeIndex = state.findIndex(todo => todo.id === action.id);
    return state.filter((todo, index) => {
      return index !== removeIndex;
    });
    
  default:
    return state;
  }
}