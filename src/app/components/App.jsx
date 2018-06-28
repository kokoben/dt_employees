import React from 'react';
import { Layout } from 'antd';
import Sider from './sider';
import Header from './header';
import Content from './content';
import Footer from './footer';

const App = () => (
  <div>
    <Layout className="full-layout">
      <Sider />
      <Layout style={{ marginLeft: 200 }}>
        <Content />
        <Footer />
      </Layout>
    </Layout>
    <Layout className="mini-layout">
      <Header />
      <Content />
      <Footer />
    </Layout>
  </div>
);

export default App;
