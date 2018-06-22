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
/* eslint-enable */

export default combineReducers({
  employees,
});
