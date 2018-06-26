import { combineReducers } from 'redux';
import * as actions from './actions/types';

/* eslint-disable consistent-return */
export const employees = (state = null, action) => {
  switch (action.type) {
    case actions.EMPLOYEES_SET_SUCCESS:
      return action.list;
    case actions.EMPLOYEES_SET_FAIL:
      console.log(action.message);
      break;
    default:
      return state;
  }
};

export const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case actions.FILTER_SET:
      return action.filter;
    default:
      return state;
  }
};

export const cursor = (state = 0, action) => {
  switch (action.type) {
    case actions.CURSOR_SET:
      return action.cursor;
    default:
      return state;
  }
};

export const currentPage = (state = 1, action) => {
  switch (action.type) {
    case actions.CURRENT_PAGE_SET:
      return action.currentPage;
    default:
      return state;
  }
}
/* eslint-enable */

export const departments = (state = null, action) => {
  switch (action.type) {
    case actions.DEPARTMENTS_SET:
      return action.departments;
    default:
      return state;
  }
};

export default combineReducers({
  employees,
  filter,
  cursor,
  currentPage,
  departments,
});
