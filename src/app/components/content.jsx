import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import EmployeesList from '../../employees/containers/employees-list';
import EmployeeDetail from '../../employee/containers/employee-detail';
import EmployeeForm from '../../employee-form/containers/employee-form';

const Content = () => (
  <Layout.Content
    style={{
      minHeight: '100vh',
      margin: '16px 16px 0',
      overflow: 'initial',
      background: '#fff',
    }}
  >
    <main>
      <Switch>
        <Route exact path="/" component={EmployeesList} />
        <Route exact path="/employee/:id" component={EmployeeDetail} />
        <Route exact path="/add" component={EmployeeForm} />
      </Switch>
    </main>
  </Layout.Content>
);

export default Content;
