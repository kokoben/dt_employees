import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { slide as Slide } from 'react-burger-menu';

class Burger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleStateChange(state) {
    this.setState({
      menuOpen: state.isOpen,
    });
  }

  closeMenu() {
    this.setState({
      menuOpen: false,
    });
  }

  /* eslint-disable jsx-a11y/anchor-is-valid */
  render() {
    return (
      <Slide
        isOpen={this.state.menuOpen}
        onStateChange={this.handleStateChange}
      >
        <Link to="/" onClick={this.closeMenu}>Employees</Link>
        <Link to="/add" onClick={this.closeMenu}>Add</Link>
      </Slide>
    );
  }
  /* eslint-enable */
}

const Header = () => (
  <div>
    <Burger />
    <Layout.Header />
  </div>
);

export default Header;
