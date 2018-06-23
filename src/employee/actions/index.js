import * as actions from './types';

export const setEmployee = employee => ({
  type: actions.EMPLOYEE_SET,
  employee,
});
