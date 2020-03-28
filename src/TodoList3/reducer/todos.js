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
        newState[action.index].completed = !state[action.index].completed;
        return newState;
      case REMOVE_TODO:
        /**
         * filter 進來的參數不是 index 而是值
         * 如果 state 是 ['a','b','c'] 那它進來分別是
         * 第1次: 'a'
         * 第2次: 'b'
         * 第3次: 'c'
         * 而不是你預期的 0,1,2
         * 所以絕大部分機率都是不符合（回傳true，保留）
         */
        return state.filter((todo, index) => index !== action.index);
      default:
        return state;
  }
}