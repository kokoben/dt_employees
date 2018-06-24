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
    return (
      <div>
        Department:
        <Select
          style={{ width: '240px', margin: '10px' }}
          defaultValue={this.props.filter}
          onChange={this.handleChange}
        >
          <Option value="ALL">ALL</Option>
          <Option value="WATER MGMNT">WATER MGMNT</Option>
          <Option value="POLICE">POLICE</Option>
          <Option value="GENERAL SERVICES">GENERAL SERVICES</Option>
          <Option value="CITY COUNCIL">CITY COUNCIL</Option>
          <Option value="STREETS & SAN">STREETS & SAN</Option>
          <Option value="OEMC">OEMC</Option>
          <Option value="AVIATION">AVIATION</Option>
          <Option value="FIRE">FIRE</Option>
          <Option value="FAMILY & SUPPORT">FAMILY & SUPPORT</Option>
          <Option value="IPRA">IPRA</Option>
          <Option value="PUBLIC LIBRARY">PUBLIC LIBRARY</Option>
          <Option value="BUSINESS AFFAIRS">BUSINESS AFFAIRS</Option>
          <Option value="TRANSPORTN">TRANSPORTN</Option>
          <Option value="HEALTH">HEALTH</Option>
          <Option value="MAYOR'S OFFICE">MAYOR&#39;S OFFICE</Option>
          <Option value="LAW">LAW</Option>
          <Option value="FINANCE">FINANCE</Option>
          <Option value="CULTURAL AFFAIRS">CULTURAL AFFAIRS</Option>
          <Option value="COMMUNITY DEVELOPMENT">COMMUNITY DEVELOPMENT</Option>
          <Option value="BUILDINGS">BUILDINGS</Option>
          <Option value="ANIMAL CONTRL">ANIMAL CONTRL</Option>
          <Option value="CITY CLERK">CITY CLERK</Option>
          <Option value="BOARD OF ELECTION">BOARD OF ELECTION</Option>
          <Option value="INSPECTOR GEN">INSPECTOR GEN</Option>
          <Option value="TREASURER">TREASURER</Option>
          <Option value="DISABILITIES">DISABILITIES</Option>
          <Option value="HUMAN RESOURCES">HUMAN RESOURCES</Option>
          <Option value="DoIT">DoIT</Option>
          <Option value="BUDGET & MGMT">BUDGET & MGMT</Option>
          <Option value="PROCUREMENT">PROCUREMENT</Option>
          <Option value="HUMAN RELATIONS">HUMAN RELATIONS</Option>
          <Option value="BOARD OF ETHICS">BOARD OF ETHICS</Option>
          <Option value="POLICE BOARD">POLICE BOARD</Option>
          <Option value="ADMIN HEARNG">ADMIN HEARNG</Option>
          <Option value="LICENSE APPL COMM">LICENSE APPL COMM</Option>
        </Select>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.employees.filter,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setFilter,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

