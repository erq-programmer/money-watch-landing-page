import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Newsletter id="about" />
        <div id="contact" style={{ background: 'blue', height: '100vh' }}>
          Contact
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
