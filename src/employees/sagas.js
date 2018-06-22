import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from './actions/types';
import { getEmployees } from './api-calls';

// workers
function* setEmployeesAsync(action) {
  try {
    const response = yield call(axios.get, getEmployees(action.page, action.pageSize));
    yield put({ type: actions.EMPLOYEES_SET_SUCCESS, response });
  } catch (e) {
    console.log('employees_set failed!');
    yield put({ type: actions.EMPLOYEES_SET_FAIL, message: e.message });
  }
}

// watchers
export function* watchSetEmployees() {
  console.log('set employees watcher running');
  yield takeEvery(actions.EMPLOYEES_SET, setEmployeesAsync);
}
