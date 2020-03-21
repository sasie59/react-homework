import {
  VisibilityFilter,
  SET_VISIBILITY_FILTER,
} from '../actions';
import { VisibilityFilters } from '../../TodoList1/actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

export default function visibilityFilter(state = VisibilityFilter.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}