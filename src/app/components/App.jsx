import React from 'react';
import { Layout } from 'antd';
import Sider from './sider';
import Content from './content';
import Footer from './footer';

const App = () => (
  <Layout>
    <Sider />
    <Layout style={{ marginLeft: 200 }}>
      <Content />
      <Footer />
    </Layout>
  </Layout>
);

export default App;
