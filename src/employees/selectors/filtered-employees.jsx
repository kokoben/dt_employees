import { createSelector } from 'reselect';
import _ from 'lodash';

const employeesSelector = state => state.employees.employees;
const filterSelector = state => state.employees.filter;

const getFilteredEmployees = (employees, filter) => {
  if (filter === 'ALL') return employees;
  const filteredList = _.filter(
    employees,
    employee => employee.department === filter,
  );

  return filteredList;
};

export default createSelector(
  employeesSelector,
  filterSelector,
  getFilteredEmployees,
);
