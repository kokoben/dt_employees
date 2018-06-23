import { combineReducers } from 'redux';
import * as actions from './actions/types';

/* eslint-disable consistent-return */
export const employee = (state = null, action) => {
  switch (action.type) {
    case actions.EMPLOYEE_SET:
      return action.employee;
    default:
      return state;
  }
};

/* eslint-enable */

export default combineReducers({
  employee,
});
