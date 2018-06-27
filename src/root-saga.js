import * as EmployeesSagas from './employees/sagas';
import * as EmployeeSagas from './employee/sagas';
import * as EmployeeFormSagas from './employee-form/sagas';

export default function* rootSaga() {
  yield [
    EmployeesSagas.watchSetEmployees(),
    EmployeeSagas.watchSetEmployee(),
    EmployeeFormSagas.watchAddEmployee(),
  ];
}
