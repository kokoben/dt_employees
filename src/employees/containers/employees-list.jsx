import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { List, Spin } from 'antd';
import Filter from './filter';
import { setEmployees, setCursor } from '../actions';
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
    this.handleClick = this.handleClick.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    if (this.listSection) {
      this.listSection.focus();
    }
    if (!this.props.employees) this.props.setEmployees(1, 100000);
    if (this.props.cursor !== 0 && this.props.cursor !== 1 && this.employeeRow) {
      // when the user returns from employee detail view, scroll to focused employee row
      this.employeeRow.scrollIntoView();
      window.scrollBy(0, -50);
    }
  }

  componentDidUpdate() {
    if (this.listSection) {
      this.listSection.focus();
    }
  }

  handleKeyDown(e) {
    const { cursor, filteredEmployees } = this.props;
    if (e.keyCode === 38 && cursor % 100 !== 0) {
      // key up
      // don't let user scroll into previous page.
      this.props.setCursor(cursor - 1);
      this.employeeRow.scrollIntoView();
      window.scrollBy(0, -50);
    } else if (e.keyCode === 40 && cursor < filteredEmployees.length && cursor % 100 !== 99) {
      // key down
      // don't let user scroll past current list page.
      this.props.setCursor(cursor + 1);
      if (cursor > 0 && cursor % 1 === 0) {
        // make the viewport follow the cursor
        this.employeeRow.scrollIntoView();
      }
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

  handleClick(employee) {
    console.log('clicking');
    const index = this.props.filteredEmployees.indexOf(employee);
    this.props.setCursor(index);
  }

  handlePageChange(page, pageSize) {
    this.props.setCursor((page - 1) * pageSize);
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  }

  render() {
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
                onClick={() => this.handleClick(item)}
                className={cursor === this.props.filteredEmployees.indexOf(item) ? 'focused' : null}
                key={item.id}
              >
                <Link
                  onClick={() => this.handleClick(item)}
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
  setEmployees: PropTypes.func.isRequired,
  setCursor: PropTypes.func.isRequired,
  filteredEmployees: PropTypes.array,
};
/* eslint-enable */

const mapStateToProps = state => ({
  employees: state.employees.employees,
  cursor: state.employees.cursor,
  filteredEmployees: FilteredEmployeesSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setEmployees,
    setCursor,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);

