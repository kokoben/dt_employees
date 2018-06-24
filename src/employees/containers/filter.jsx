import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select } from 'antd';
import { setFilter } from '../actions';

const Option = Select.Option;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.setFilter(value);
  }

  render() {
    if (!this.props.departments) return null;
    const departments = this.props.departments.map(department =>
      <Option key={department} value={department}>{department}</Option>);

    return (
      <div>
        Department:
        <Select
          style={{ width: '240px', margin: '10px' }}
          defaultValue={this.props.filter}
          onChange={this.handleChange}
        >
          {departments}
        </Select>
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  departments: PropTypes.array,
  setFilter: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  filter: state.employees.filter,
  departments: state.employees.departments,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setFilter,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

