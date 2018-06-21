import React, { Component } from 'react';
import './App.css';
import  EmployeesList  from './employees/components/employees-list';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>City of Chicago Employee Directory</h1>
      <EmployeesList />
      </div>
    );
  }
}

export default App;
