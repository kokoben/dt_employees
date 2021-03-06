import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const FullMenu = withRouter((props) => {
  const { location } = props;
  return (
    <Layout.Sider
      style={{
        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
      }}
    >
      <Menu
        theme="dark"
        selectedKeys={[location.pathname]}
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
});

const Sider = () => (
  <div>
    <FullMenu />
  </div>
);

export default Sider;

