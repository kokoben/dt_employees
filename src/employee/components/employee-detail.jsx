import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { List, Card } from 'antd';


const EmployeeDetail = (props) => {
  const employeeData = [
    { title: 'Employee ID', content: props.employee.id },
    { title: 'key', content: props.employee.name },
    { title: 'Job Title', content: props.employee.job_titles },
    { title: 'Annual Salary', content: props.employee.employee_annual_salary },
    { key: 'Department', content: props.employee.department },
  ];

  return (
    <List
      dataSource={employeeData}
      renderItem={item => (
        <List.Item key={item.title}>
          <Card title={item.title}>{item.content}</Card>
        </List.Item>
      )}
    />
  );
};

/* eslint-disable react/forbid-prop-types */
EmployeeDetail.propTypes = {
  employee: PropTypes.object.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  employee: state.employee.employee,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail);
