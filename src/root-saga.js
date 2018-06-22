import * as EmployeesSagas from './employees/sagas';

export default function* rootSaga() {
  yield [
    EmployeesSagas.watchSetEmployees(),
  ];
}
