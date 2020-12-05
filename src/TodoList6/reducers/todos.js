import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/todos';

export default (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [
      ...state, {
        id: Math.random(),
        text: action.payload,
        isFin: false,
      }
    ];
  case TOGGLE_TODO:
    const updateIndex = state.findIndex(todo => todo.id === action.payload);
    return [
      ...state.slice(0, updateIndex),
      {
        ...state[updateIndex],
        isFin: !state[updateIndex].isFin,
      },
      ...state.slice(updateIndex + 1),
    ];
  case REMOVE_TODO:
    const removeIndex = state.findIndex(todo => todo.id === action.payload);
    return [
      ...state.slice(0, removeIndex),
      ...state.slice(removeIndex + 1),
    ];
  default:
    return state;
  }
};