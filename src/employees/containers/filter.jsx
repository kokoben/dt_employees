import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select } from 'antd';

const Option = Select.Option;

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
  }

  render() {
    return (
      <Select
        style={{ width: '240px', margin: '10px' }}
        defaultValue={this.props.filter}
        onChange={this.handleChange}
      >
        <Option value="all">ALL</Option>
        <Option value="police">POLICE</Option>
        <Option value="fire">FIRE</Option>
        <Option value="streets">STREETS & SAN</Option>
        <Option value="oemc">OEMC</Option>
        <Option value="water">WATER MGMNT</Option>
        <Option value="aviation">AVIATION</Option>
        <Option value="transport">TRANSPORTN</Option>
        <Option value="library">PUBLIC LIBRARY</Option>
        <Option value="general">GENERAL SERVICES</Option>
        <Option value="family">FAMILY & SUPPORT</Option>
        <Option value="finance">FINANCE</Option>
        <Option value="health">HEALTH</Option>
        <Option value="city">CITY COUNCIL</Option>
        <Option value="law">LAW</Option>
        <Option value="buildings">BUILDINGS</Option>
        <Option value="community">COMMUNITY DEVELOPMENT</Option>
        <Option value="business">BUSINESS AFFAIRS</Option>
        <Option value="copa">COPA</Option>
        <Option value="election">BOARD OF ELECTION</Option>
        <Option value="doit">DoIT</Option>
        <Option value="procurement">PROCUREMENT</Option>
        <Option value="inspector">INSPECTOR GEN</Option>
        <Option value="mayors">MAYORS OFFICE</Option>
        <Option value="city">CITY CLERK</Option>
        <Option value="animal">ANIMAL CONTRL</Option>
        <Option value="human">HUMAN RESOURCES</Option>
        <Option value="cultural">CULTURAL AFFAIRS</Option>
        <Option value="budget">BUDGET & MGMT</Option>
        <Option value="admin">ADMIN HEARNG</Option>
        <Option value="disabilities">DISABILITIES</Option>
        <Option value="treasurer">TREASURER</Option>
        <Option value="human">HUMAN RELATIONS</Option>
        <Option value="ethics">BOARD OF ETHICS</Option>
        <Option value="polboard">POLICE BOARD</Option>
        <Option value="license">LICENSE APPL COMM</Option>
      </Select>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filter: state.employees.filter,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

