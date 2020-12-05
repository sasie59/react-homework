import { VISIBILITY_FILTER } from '../actions/visibilityFilter';

export default (state = 'ALL', action) => {
  switch (action.type) {
  case VISIBILITY_FILTER:
    return action.payload;
  default:
    return state;
  }
};