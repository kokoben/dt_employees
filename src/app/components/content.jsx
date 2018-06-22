import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import EmployeesList from '../../employees/containers/employees-list';

const Content = () => (
  <Layout.Content>
    <main>
      <Switch>
        <Route exact path="/" component={EmployeesList} />
      </Switch>
    </main>
  </Layout.Content>
);

export default Content;
