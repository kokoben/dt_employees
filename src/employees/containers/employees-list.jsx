import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, Spin } from 'antd';
import Filter from './filter';
import { setEmployees } from '../actions';
import FilteredEmployeesSelector from '../selectors/filtered-employees';

class EmployeesList extends Component {
  componentDidMount() {
    if (!this.props.employees) this.props.setEmployees(1, 100000);
  }

  render() {
    if (!this.props.employees) {
      return (
        <div>
          <h1>City of Chicago Employee Directory</h1>
          <Spin
            style={{ marginTop: '20px' }}
            size="large"
            tip="Loading employees..."
          />
        </div>
      );
    }

    return (
      <div>
        <h1>City of Chicago Employee Directory</h1>
        <Filter />
        <List
          // if no filter is selected, render entire list of employees
          // otherwise, only render filtered employees
          dataSource={this.props.filter === 'ALL' ?
            this.props.employees : this.props.filteredEmployees
          }
          pagination={{ pageSize: 100, position: 'both' }}
          renderItem={item => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <List.Item key={item.id}>
              <Link to={`/employee/${item.id}`}>
                <List.Item.Meta
                  title={item.name}
                  description={item.job_titles}
                />
              </Link>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
EmployeesList.propTypes = {
  employees: PropTypes.array,
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

