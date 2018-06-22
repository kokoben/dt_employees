import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { setEmployees } from '../actions';

class EmployeesList extends Component {
  componentDidMount() {
    this.props.setEmployees(1, 100);
  }

  render() {
    return (
      <div>
        poop list
      </div>
    );
  }
}

EmployeesList.propTypes = {
  setEmployees: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  employees: state.employees.employees,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setEmployees,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);

