import React, { Component } from 'react';
import './App.css';
import EmployeesList from './employees/containers/employees-list';

const App = props => (
  <div className="App">
    <h1>City of Chicago Employee Directory</h1>
    <EmployeesList />
  </div>
);

export default App;
