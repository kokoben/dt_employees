import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from './actions/types';
import { postEmployee } from './api-calls';

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
  } catch (e) {
    console.log('employee_add failed');
    yield put({ type: actions.EMPLOYEE_ADD_FAIL, message: e.message });
  }
}


// watchers
export function* watchAddEmployee() {
  yield takeEvery(actions.EMPLOYEE_ADD, addEmployeeAsync);
}
