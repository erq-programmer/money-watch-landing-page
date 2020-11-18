import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import Shape from '../components/Shape/Shape';
import Contact from '../components/Contact/Contact';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return isMobile ? children : null;
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Desktop>
          <Shape />
        </Desktop>

        <Header />
        <main>
          <Newsletter />
          <Contact />
        </main>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
