import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { List, Spin } from 'antd';
import Filter from './filter';
import { setEmployees } from '../actions';
import FilteredEmployeesSelector from '../selectors/filtered-employees';

class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cursor: 0,
      id: null,
      redirect: false,
    };

    this.listSection = null;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    console.log('mounted employeeslist');
    if (this.listSection) {
      this.listSection.focus();
    }
    if (!this.props.employees) this.props.setEmployees(1, 100000);
  }

  componentDidUpdate() {
    console.log('componentdidupdate in employees');
    if (this.listSection) {
      this.listSection.focus();
    }
  }

  handleKeyDown(e) {
    const { cursor } = this.state;
    const { filteredEmployees } = this.props;
    if (e.keyCode === 38 && cursor > 0) {
      // key up
      this.setState(prevState => ({ cursor: prevState.cursor - 1 }));
    } else if (e.keyCode === 40 && cursor < filteredEmployees.length) {
      // key down
      this.setState(prevState => ({ cursor: prevState.cursor + 1 }));
    } else if (e.keyCode === 13) {
      // enter
      // get employee id using cursor position,
      // and use it to direct user to employee detail page
      this.setState({
        id: filteredEmployees[cursor].id,
        redirect: true,
      });
    }
  }

  render() {
    console.log('rendering employees');
    const { cursor, id, redirect } = this.state;

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
          header="Employees:"
          // if no filter is selected, render entire list of employees
          // otherwise, only render filtered employees
          dataSource={this.props.filteredEmployees}
          pagination={{ pageSize: 100, position: 'both' }}
          renderItem={item => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <List.Item className={cursor === this.props.filteredEmployees.indexOf(item) ? 'focused' : null} key={item.id}>
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
  filteredEmployees: PropTypes.array,
};
/* eslint-enable */

const mapStateToProps = state => ({
  employees: state.employees.employees,
  filteredEmployees: FilteredEmployeesSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setEmployees,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);

