import * as actions from './types';

export const setEmployee = id => ({
  type: actions.EMPLOYEE_SET,
  id,
});
