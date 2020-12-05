import { VISIBILITY_FILTER, ALL } from '../actions/visibilityFilter';

export default function visibilityFilter(state = 'ALL' ,action) {
  switch (action.type){
  case VISIBILITY_FILTER:
    return action.item;
  default:
    return state;
  }
}