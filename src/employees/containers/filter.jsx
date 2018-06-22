import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Dropdown } from 'antd';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item>ALL</Menu.Item>
        <Menu.Item>POLICE</Menu.Item>
        <Menu.Item>FIRE</Menu.Item>
        <Menu.Item>STREETS & SAN</Menu.Item>
        <Menu.Item>OEMC</Menu.Item>
        <Menu.Item>WATER MGMNT</Menu.Item>
        <Menu.Item>AVIATION</Menu.Item>
        <Menu.Item>TRANSPORTN</Menu.Item>
        <Menu.Item>PUBLIC LIBRARY</Menu.Item>
        <Menu.Item>GENERAL SERVICES</Menu.Item>
        <Menu.Item>FAMILY & SUPPORT</Menu.Item>
        <Menu.Item>FINANCE</Menu.Item>
        <Menu.Item>HEALTH</Menu.Item>
        <Menu.Item>CITY COUNCIL</Menu.Item>
        <Menu.Item>LAW</Menu.Item>
        <Menu.Item>BUILDINGS</Menu.Item>
        <Menu.Item>COMMUNITY DEVELOPMENT</Menu.Item>
        <Menu.Item>BUSINESS AFFAIRS</Menu.Item>
        <Menu.Item>COPA</Menu.Item>
        <Menu.Item>BOARD OF ELECTION</Menu.Item>
        <Menu.Item>DoIT</Menu.Item>
        <Menu.Item>PROCUREMENT</Menu.Item>
        <Menu.Item>INSPECTOR GEN</Menu.Item>
        <Menu.Item>MAYORS OFFICE</Menu.Item>
        <Menu.Item>CITY CLERK</Menu.Item>
        <Menu.Item>ANIMAL CONTRL</Menu.Item>
        <Menu.Item>HUMAN RESOURCES</Menu.Item>
        <Menu.Item>CULTURAL AFFAIRS</Menu.Item>
        <Menu.Item>BUDGET & MGMT</Menu.Item>
        <Menu.Item>ADMIN HEARNG</Menu.Item>
        <Menu.Item>DISABILITIES</Menu.Item>
        <Menu.Item>TREASURER</Menu.Item>
        <Menu.Item>HUMAN RELATIONS</Menu.Item>
        <Menu.Item>BOARD OF ETHICS</Menu.Item>
        <Menu.Item>POLICE BOARD</Menu.Item>
        <Menu.Item>LICENSE APPL COMM</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown.Button overlay={menu}>
        {this.props.filter}
      </Dropdown.Button>
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

