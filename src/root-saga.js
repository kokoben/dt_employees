import * as EmployeesSagas from './employees/sagas';
import * as EmployeeSagas from './employee/sagas';

export default function* rootSaga() {
  yield [
    EmployeesSagas.watchSetEmployees(),
    EmployeeSagas.watchSetEmployee(),
  ];
}
