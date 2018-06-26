import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { List, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { setEmployee } from '../actions';
import { setCursor, setCurrentPage } from '../../employees/actions';

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
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  componentDidMount() {
    this.props.setEmployee(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { prev, next } = this.state;

    if (prev) {
      this.setState({ prev: false });
    }
    if (next) {
      this.setState({ next: false });
    }
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.setEmployee(this.props.match.params.id);
    }
    if (this.detailSection) {
      this.detailSection.focus();
    }
  }

  handleKeyDown(e) {
    const { cursor, currentPage } = this.props;

    if (e.keyCode === 13) {
      // enter key directs user back to employee directory
      this.setState({ back: true });
    } else if (e.keyCode === 38) {
      // up key directs user to previous employee
      e.preventDefault();
      this.setState({ prev: true });

      // track whether list goes to previous page
      if (cursor > 0 && cursor % 100 === 0) {
        this.props.setCurrentPage(currentPage - 1);
      }
      this.props.setCursor(cursor - 1);

    } else if (e.keyCode === 40) {
      // down key directs user to next employee
      e.preventDefault();
      this.setState({ next: true });

      // track whether list goes to next page.
      if (cursor > 0 && cursor % 99 === 0) {
        this.props.setCurrentPage(currentPage + 1);
      }

      this.props.setCursor(cursor + 1);

    }
  }

  handlePrevClick() {
    const { cursor, currentPage } = this.props;
    this.props.setCursor(cursor - 1);

    if (cursor > 0 && cursor % 100 === 0) {
      this.props.setCurrentPage(currentPage - 1);
    }
  }

  handleNextClick() {
    const { cursor, currentPage } = this.props;
    this.props.setCursor(cursor + 1);

    if (cursor > 0 && cursor % 99 === 0) {
      this.props.setCurrentPage(currentPage + 1);
    }
  }

  render() {
    const { back, prev, next } = this.state;
    const prevEmployeeId = parseInt(this.props.match.params.id) - 1;
    const nextEmployeeId = parseInt(this.props.match.params.id) + 1;

    if (!this.props.employee) return null;
    if (back) {
      return <Redirect to="/" />;
    }
    if (prev) {
      return <Redirect to={`/employee/${prevEmployeeId}`} />;
    }
    if (next) {
      return <Redirect to={`/employee/${nextEmployeeId}`} />;
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
        <Link to={`/employee/${prevEmployeeId}`}>
          <Button
            onClick={this.handlePrevClick}
            type="primary"
            icon="left"
            size="small"
            style={{ float: 'left', margin: '10px' }}
          >
            Previous
          </Button>
        </Link>
        <Link to={`/employee/${nextEmployeeId}`}>
          <Button
            onClick={this.handleNextClick}
            type="primary"
            size="small"
            style={{ float: 'right', margin: '10px' }}
          >
            Next <Icon type="right" />
          </Button>
        </Link>
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
EmployeeDetail.propTypes = {
  match: PropTypes.object.isRequired,
  employee: PropTypes.object,
  setEmployee: PropTypes.func.isRequired,
  setCursor: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  employee: state.employee.employee,
  cursor: state.employees.cursor,
  currentPage: state.employees.currentPage,
  employees: state.employees.employees,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setEmployee,
    setCurrentPage,
    setCursor,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail);
