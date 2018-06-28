import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { List, Spin } from 'antd';
import Filter from './filter';
import { setEmployees, setCursor, setCurrentPage } from '../actions';
import { updateSubmitStatus } from '../../employee-form/actions';
import FilteredEmployeesSelector from '../selectors/filtered-employees';

class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      redirect: false,
    };

    this.listSection = null;
    this.employeeRow = null;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    if (this.listSection) {
      this.listSection.focus();
    }
    if (!this.props.employees) {
      this.props.setEmployees(1, 100000);
    }
    if (this.props.cursor !== 0 && this.employeeRow) {
      // when the user returns from employee detail view, scroll to focused employee row
      this.employeeRow.scrollIntoView();
      window.scrollBy(0, -50);
    }
  }

  componentDidUpdate(prevProps) {
    console.log('updated component');
    if (this.listSection) {
      this.listSection.focus();
    }

    // if going to next page, scroll to top.
    if (prevProps.cursor % 100 === 99 &&
      this.props.cursor === prevProps.cursor + 1
    ) {
      window.scrollTo(0, 0);
    }

    // if going to previous page (unless on the first page), scroll to last row.
    if (
      prevProps.cursor > 0 &&
      prevProps.cursor % 100 === 0 &&
      this.props.cursor === prevProps.cursor - 1
    ) {
      this.employeeRow.scrollIntoView();
    }
  }

  handleKeyDown(e) {
    const { cursor, filteredEmployees, currentPage } = this.props;
    if (e.keyCode === 38 && cursor > 0) {
      // key up
      // if on first page row and not the first page, go to previous page.
      if (cursor > 0 && cursor % 100 === 0) {
        this.props.setCurrentPage(currentPage - 1);
      }

      this.props.setCursor(cursor - 1);
      // make viewport follow cursor
      this.employeeRow.scrollIntoView();
      window.scrollBy(0, -50);
    } else if (e.keyCode === 40 && cursor < filteredEmployees.length) {
      // key down
      // if on last page row, go to next page.
      if (cursor % 100 === 99) {
        this.props.setCurrentPage(currentPage + 1);
      }

      this.props.setCursor(cursor + 1);
      // make viewport follow cursor.
      this.employeeRow.scrollIntoView();
    } else if (e.keyCode === 13) {
      // enter
      // get employee id using cursor position,
      // and use it to direct user to employee detail page.
      this.setState({
        id: filteredEmployees[cursor].id,
        redirect: true,
      });
    }
  }

  handleRowClick(employee) {
    const index = this.props.filteredEmployees.indexOf(employee);
    this.props.setCursor(index);
  }

  handlePageChange(page, pageSize) {
    this.props.setCursor((page - 1) * pageSize);
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
    this.props.setCurrentPage(page);
  }

  render() {
    console.log('rendering');
    /* if user added a new employee and has just been kicked back to employees list,
    update the list. */
    if (this.props.submitStatus) {
      console.log("submit status changed, updating list in render");
      this.props.updateSubmitStatus(false);
    }
    const { id, redirect } = this.state;
    const { cursor } = this.props;

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

    // if user has hit enter while focused on an employee row,
    // redirect to that employee's detail page
    if (redirect) {
      return <Redirect to={`/employee/${id}`} />;
    }

    return (
      <div
        ref={(node) => { this.listSection = node; }}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
      >
        <h1>City of Chicago Employee Directory</h1>
        <Filter />
        <List
          size="small"
          header="Employees:"
          // if no filter is selected, render entire list of employees
          // otherwise, only render filtered employees
          dataSource={this.props.filteredEmployees}
          pagination={{
            onChange: this.handlePageChange,
            current: this.props.currentPage,
            size: 'small',
            pageSize: 100,
            position: 'both',
          }}
          renderItem={item => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <div
              ref={(node) => {
                if (cursor === this.props.filteredEmployees.indexOf(item)) this.employeeRow = node;
              }}
            >
              <List.Item
                onClick={() => this.handleRowClick(item)}
                className={cursor === this.props.filteredEmployees.indexOf(item) ? 'focused' : null}
                key={item.id}
              >
                <Link
                  onClick={() => this.handleRowClick(item)}
                  to={`/employee/${item.id}`}
                >
                  <List.Item.Meta
                    title={item.name}
                    description={item.job_titles}
                  />
                </Link>
              </List.Item>
            </div>
          )}
        />
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
EmployeesList.propTypes = {
  employees: PropTypes.array,
  cursor: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setEmployees: PropTypes.func.isRequired,
  setCursor: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  filteredEmployees: PropTypes.array,
  updateSubmitStatus: PropTypes.func.isRequired,
  submitStatus: PropTypes.bool.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  employees: state.employees.employees,
  cursor: state.employees.cursor,
  currentPage: state.employees.currentPage,
  submitStatus: state.form.submitStatus,
  filteredEmployees: FilteredEmployeesSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setEmployees,
    setCursor,
    setCurrentPage,
    updateSubmitStatus,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);

