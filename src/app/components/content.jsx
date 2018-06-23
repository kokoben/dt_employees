import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import EmployeesList from '../../employees/containers/employees-list';
import EmployeeDetail from '../../employee/components/employee-detail';

const Content = () => (
  <Layout.Content>
    <main>
      <Switch>
        <Route exact path="/" component={EmployeesList} />
        <Route exact path="/employee/:id" component={EmployeeDetail} />
      </Switch>
    </main>
  </Layout.Content>
);

export default Content;
