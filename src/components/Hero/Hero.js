import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { device } from '../../theme/device';

const Wrapper = styled.section`
  padding: 12rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.laptop} {
    position: absolute;
    text-align: left;
    height: auto;
    width: 50%;
    padding-left: 20px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    justify-content: flex-start;
  }
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.color.gray1};
  letter-spacing: 0.2px;
  line-height: 46px;
  font-weight: ${({ theme }) => theme.font.bold};
  padding: 3rem 0 2rem;
  margin: 0;

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.size.xxl};
    line-height: 66px;
  }
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.color.gray3};
  letter-spacing: 0.2px;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.regular};
  padding: 0 0 3rem;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Heading>Lorem ipsum dolor sit amet</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <Text>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Button>Get Early Access</Button>
      <Button outline>Contact Us</Button>
    </Wrapper>
  );
};

export default Hero;
