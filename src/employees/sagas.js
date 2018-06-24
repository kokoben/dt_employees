import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from './actions/types';
import { getEmployees } from './api-calls';

// workers
function* setEmployeesAsync(action) {
  try {
    // get entire list of employees for pagination.
    let list = [];
    let { page } = action;
    let response = yield call(axios.get, getEmployees(page, action.pageSize));

    while (response.data.length > 0) {
      list = [...list, ...response.data];
      page += 1;
      response = yield call(axios.get, getEmployees(page, action.pageSize));
    }

    // get all departments
    const departments = ['ALL'];
    for (let i = 0; i < list.length; i += 1) {
      if (departments.indexOf(list[i].department) === -1) {
        departments.push(list[i].department);
      }
    }

    yield put({ type: actions.DEPARTMENTS_SET, departments });
    yield put({ type: actions.EMPLOYEES_SET_SUCCESS, list });
  } catch (e) {
    console.log('employees_set failed');
    yield put({ type: actions.EMPLOYEES_SET_FAIL, message: e.message });
  }
}

// watchers
export function* watchSetEmployees() {
  console.log('set employees watcher running');
  yield takeEvery(actions.EMPLOYEES_SET, setEmployeesAsync);
}
