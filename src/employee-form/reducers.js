import { combineReducers } from 'redux';
import * as actions from './actions/types';

export const fields = (state = null, action) => {
  switch (action.type) {
    case actions.FIELDS_UPDATE:
      return {
        ...state,
        ...action.fields,
      };
    default:
      return state;
  }
};

export const submitStatus = (state = false, action) => {
  switch (action.type) {
    case actions.SUBMIT_UPDATE:
      return action.submitStatus;
    default:
      return state;
  }
};

export default combineReducers({
  fields,
  submitStatus,
});
