import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/todos';

export default function todos(state = [],action) {
  switch(action.type){
  case ADD_TODO:
    return [...state,
      {
        id: Math.random(),
        text: action.text,
        completed: false
      }
    ];
  case TOGGLE_TODO:
    const newState = JSON.parse(JSON.stringify(state)); // deep copy
    const toggleIndex = newState.findIndex(todo => todo.id === action.id);
    newState[toggleIndex].completed = !newState[toggleIndex].completed;
    return newState;
  case REMOVE_TODO:
    return state.filter(todo => todo.id !== action.id);
  default:
    return state;
  }
}