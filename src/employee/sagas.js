import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from './actions/types';
import { getEmployee } from './api-calls';

// workers
function* setEmployeeAsync(action) {
  try {
    const response = yield call(axios.get, getEmployee(action.id));
    yield put({ type: actions.EMPLOYEE_SET_SUCCESS, employee: response.data });
  } catch (e) {
    console.log('employee_set failed');
    yield put({ type: actions.EMPLOYEE_SET_FAIL, message: e.message });
  }
}

// watchers
export function* watchSetEmployee() {
  yield takeEvery(actions.EMPLOYEE_SET, setEmployeeAsync);
}
