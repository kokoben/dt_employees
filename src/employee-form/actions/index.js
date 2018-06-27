import * as actions from './types';

export const addEmployee = fields => ({
  type: actions.EMPLOYEE_ADD,
  fields,
});

export const updateFields = fields => ({
  type: actions.FIELDS_UPDATE,
  fields,
});
