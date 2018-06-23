import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, Spin } from 'antd';
import Filter from './filter';
import { setEmployees } from '../actions';
import { setEmployee } from '../../employee/actions';
import FilteredEmployeesSelector from '../selectors/filtered-employees';

class EmployeesList extends Component {
  componentDidMount() {
    this.props.setEmployees(1, 100000);
  }

  handleClick(employee) {
    // set selected employee state to populate detail view
    this.props.setEmployee(employee);
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
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link to={`/${item.id}`}>
              <List.Item
                onClick={() => this.handleClick(item)}
                key={item.id}
              >
                <List.Item.Meta
                  title={item.name}
                  description={item.job_titles}
                />
              </List.Item>
            </Link>
          )}
        />
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
EmployeesList.propTypes = {
  employees: PropTypes.array.isRequired,
  setEmployee: PropTypes.func.isRequired,
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

