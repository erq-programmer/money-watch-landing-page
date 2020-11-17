import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import Shape from '../Shape/Shape';
import { device } from '../../theme/device';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return isMobile ? children : null;
};

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* overflow: hidden; */
`;

const Navbar = styled.section`
  display: flex-reverse;
  /* background-color: red; */
  width: 100%;
  justify-content: center;
`;

const HeroSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    display: grid;
  }
`;

const Overlay = styled.div`
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'visible' : 'hidden')};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderWrapper id="home">
      <Overlay isMenuOpen={isMenuOpen} onClick={handleToggleMenu} />
      <Navbar>
        <Menu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
        <Logo />
      </Navbar>
      <Mobile>
        <Shape />
      </Mobile>
      <Hero />
    </HeaderWrapper>
  );
};

export default Header;
