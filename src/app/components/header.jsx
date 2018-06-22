import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { slide as Slide } from 'react-burger-menu';

const FullMenu = () => (
  <Layout.Header className="menu-full">
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['/']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link to="/">Employees</Link>
      </Menu.Item>
      <Menu.Item key="/add">
        <Link to="/add">Add</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

const Header = () => (
  <div>
    <FullMenu />
  </div>
);

export default Header;
