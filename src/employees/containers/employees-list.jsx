import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { List, Spin } from 'antd';
import Filter from './filter';
import { setEmployees } from '../actions';

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
          dataSource={this.props.employees}
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
  setEmployees: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  employees: state.employees.employees,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setEmployees,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);

