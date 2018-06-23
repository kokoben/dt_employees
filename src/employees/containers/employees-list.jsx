import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { List, Spin } from 'antd';
import Filter from './filter';
import { setEmployees } from '../actions';
import FilteredEmployeesSelector from '../selectors/filtered-employees';

class EmployeesList extends Component {
  componentDidMount() {
    this.props.setEmployees(1, 100000);
  }

  render() {
    if (!this.props.employees) {
      return (
        <Spin
          size="large"
          tip="Loading employees..."
        />
      );
    }

    return (
      <div>
        <Filter />
        <List
          // if no filter is selected, render entire list of employees
          // otherwise, only render filtered employees
          dataSource={this.props.filter === 'ALL' ?
            this.props.employees : this.props.filteredEmployees
          }
          renderItem={item => (
            <List.Item
              key={item.id}
            >
              <List.Item.Meta
                title={item.name}
                description={item.job_titles}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
EmployeesList.propTypes = {
  employees: PropTypes.array.isRequired,
  setEmployees: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filteredEmployees: PropTypes.array.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  employees: state.employees.employees,
  filter: state.employees.filter,
  filteredEmployees: FilteredEmployeesSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setEmployees,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);

