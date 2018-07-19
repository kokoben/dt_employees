import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import * as actions from './actions/types';
import { postEmployee } from './api-calls';
import { EMPLOYEES_SET } from '../employees/actions/types';

// workers
function* addEmployeeAsync(action) {
  try {
    let name = `${action.fields.lastName}, ${action.fields.firstName}`;
    name = name.toUpperCase();

    const data = JSON.stringify({
      name,
      department: action.fields.department.toUpperCase(),
      employee_annual_salary: action.fields.salary,
      job_titles: action.fields.jobTitle.toUpperCase(),
    });

    const response = yield call(axios.post, postEmployee(), data);
    yield put({ type: actions.EMPLOYEE_ADD_SUCCESS, response });

    message.success('Employee succesfully added!', 5);
    // update list of employees with added employee and possible new department
    yield put({ type: EMPLOYEES_SET, page: 1, pageSize: 100000 });
  } catch (e) {
    console.log('employee_add failed');
    message.error(`Error: ${e.message}. Employee not added!`, 5);
    yield put({ type: actions.EMPLOYEE_ADD_FAIL, message: e.message });
  }
}


// watchers
export function* watchAddEmployee() {
  yield takeEvery(actions.EMPLOYEE_ADD, addEmployeeAsync);
}
