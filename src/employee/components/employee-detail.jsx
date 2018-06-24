import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';
import { setEmployee } from '../actions';

class EmployeeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      back: false,
      prev: false,
      next: false,
    };

    this.detailSection = null;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.props.setEmployee(this.props.match.params.id);
  }

  componentDidUpdate() {
    console.log('employee componentdidupdate');
    if (this.detailSection) {
      this.detailSection.focus();
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      // enter key. direct user back to employee directory
      this.setState({ back: true });
    } else if (e.keyCode === 38) {}
  }

  render() {
    const { back, prev, next } = this.state;

    if (!this.props.employee) return null;
    if (back) {
      return <Redirect to="/" />;
    }

    if (this.props.employee.title === 'not found') {
      return (
        <div>Employee not found</div>
      );
    }

    const employeeData = [
      { title: 'Name:', content: this.props.employee.name },
      { title: 'Employee ID:', content: this.props.employee.id },
      { title: 'Job Title:', content: this.props.employee.job_titles },
      { title: 'Annual Salary:', content: `$${this.props.employee.employee_annual_salary}` },
      { title: 'Department:', content: this.props.employee.department },
    ];

    return (
      <div
        ref={(node) => { this.detailSection = node; }}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
      >
        <Link to="/">
          <Button
            style={{ float: 'left', margin: '10px' }}
            size="small"
            type="primary"
            icon="left"
          >
            Back
          </Button>
        </Link>
        <h1 style={{ clear: 'left' }}>Employee Information</h1>
        <List
          dataSource={employeeData}
          renderItem={item => (
            <List.Item key={item.title}>
              <List.Item.Meta
                title={item.title}
                description={item.content}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
EmployeeDetail.propTypes = {
  match: PropTypes.object.isRequired,
  employee: PropTypes.object,
  setEmployee: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  employee: state.employee.employee,
  employees: state.employees.employees,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setEmployee,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail);
