import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import EmployeesReducers from './employees/reducers';
import DetailReducers from './employee/reducers';
import EmployeeFormReducers from './employee-form/reducers';

export default combineReducers({
  routing: routerReducer,
  employees: EmployeesReducers,
  employee: DetailReducers,
  form: EmployeeFormReducers,
});
