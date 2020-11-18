import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { device } from '../../theme/device';

const NavigationWrapper = styled.nav`
  grid-area: menu;
  width: 100%;
`;

const Hamburger = styled.button`
  position: fixed;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  z-index: 10;
  background: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  box-shadow: 0px 2px 6px #0000001a;

  &:focus {
    outline: none;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const HamburgerBox = styled.span`
  width: 2.2rem;
  height: 0.3rem;
  background: ${({ theme, isMenuOpen }) => (isMenuOpen ? 'transparent' : theme.color.gray1)};
  border-radius: 1rem;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  z-index: 10;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 2.2rem;
    height: 0.3rem;
    background: ${({ theme, isMenuOpen }) => (isMenuOpen ? theme.color.gray1 : theme.color.gray1)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: absolute;
    transform-origin: 1px;
  }

  &::before {
    top: -0.8rem;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateY(0.2rem) translateX(0.3rem) rotate(45deg) ' : 'rotate(0)'};
  }

  &::after {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateY(0) translateX(0.3rem) rotate(-45deg)' : 'rotate(0)'};
    top: 0.8rem;
  }
`;

const NavigationList = styled.ul`
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.color.white};
  height: 100vh;
  min-width: 240px;
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  list-style: none;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(100%)')};

  @media ${device.laptop} {
    position: relative;
    flex-direction: row;
    justify-content: ${({ footer }) => (footer ? 'center' : 'flex-start')};
    background-color: transparent;
    height: auto;
    width: auto;
    transform: none;
    padding: 0;
    margin: ${({ footer }) => (footer ? '0' : '0 0 0 4rem')};

    li a {
      color: ${({ theme }) => theme.color.grey1};
    }
  }
`;

const NavigationItem = styled.li`
  margin: 3rem 2rem;

  .active {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.size.s};
  font-weight: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.gray1};
  text-decoration: none;
  padding: 2rem;
  cursor: pointer;
`;

const SrOnly = styled.span`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Menu = ({ isMenuOpen, handleToggleMenu, footer }) => {
  return (
    <NavigationWrapper>
      <Hamburger type="button" aria-expanded="false" onClick={() => handleToggleMenu()}>
        <SrOnly>Open/close menu</SrOnly>
        <HamburgerBox isMenuOpen={isMenuOpen} />
      </Hamburger>
      <NavigationList isMenuOpen={isMenuOpen} footer={footer}>
        <NavigationItem>
          <StyledLink activeClass="active" to="home" spy smooth duration={1000}>
            Home
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink activeClass="active" to="about" spy smooth duration={1000}>
            About
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink activeClass="active" to="contact" spy smooth duration={1000}>
            Contact
          </StyledLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Menu;
