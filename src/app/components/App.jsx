import React from 'react';
import { Layout } from 'antd';
import Header from './header';
import Content from './content';
import Footer from './footer';

const App = () => (
  <div>
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </div>
);

export default App;
