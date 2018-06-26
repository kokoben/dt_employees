import * as actions from './types';

export const addEmployee = (first, last, title, salary, department) => ({
  type: actions.EMPLOYEE_ADD,
  info: {
    first,
    last,
    title,
    salary,
    department,
  },
});
