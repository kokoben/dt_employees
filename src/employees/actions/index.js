import * as actions from './types';

export const setEmployees = (page, pageSize) => ({
  type: actions.EMPLOYEES_SET,
  page,
  pageSize,
});

export const setFilter = filter => ({
  filter,
});
