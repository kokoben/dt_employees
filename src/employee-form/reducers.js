import { combineReducers } from 'redux';
import * as actions from './actions/types';

export const fields = (state = null, action) => {
  switch (action.type) {
    case actions.FIELDS_UPDATE:
      if (!action.fields) return null;
      return {
        ...state,
        ...action.fields,
      };
    default:
      return state;
  }
};

export default combineReducers({
  fields,
});
