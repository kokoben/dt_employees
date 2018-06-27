import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { slide as Slide } from 'react-burger-menu';

let href = window.location.href.split('/');
href = href[3];

const FullMenu = () => (
  <Layout.Sider
    style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
    className="menu-full"
  >
    <Menu
      theme="dark"
      defaultSelectedKeys={[`/${href}`]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link to="/">Employees</Link>
      </Menu.Item>
      <Menu.Item key="/add">
        <Link to="/add">Add</Link>
      </Menu.Item>
    </Menu>
  </Layout.Sider>
);

const Header = () => (
  <div>
    <FullMenu />
  </div>
);

export default Header;
