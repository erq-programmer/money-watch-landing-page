import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <div id="about" style={{ background: 'red', height: '100vh' }}>
          About
        </div>
        <div id="contact" style={{ background: 'blue', height: '100vh' }}>
          Contact
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
