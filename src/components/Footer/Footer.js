import React from 'react';
import { Icon } from '@iconify/react';
import heartSolid from '@iconify/icons-clarity/heart-solid';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import Menu from '../Menu/Menu';

const Wrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray5};
`;

const Content = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
  display: grid;
  justify-items: center;
`;

const CopyrightInfo = styled.p`
  font-size: ${({ theme }) => theme.size.xxs};
  color: ${({ theme }) => theme.color.gray3};
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.tertiary};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 3rem 0;
  background-color: ${({ theme }) => theme.color.gray4};
`;

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Logo footer />
        <CopyrightInfo>
          Built with <StyledIcon icon={heartSolid} style={{ fontSize: '16px' }} /> ©{' '}
          {new Date().getFullYear()}
        </CopyrightInfo>
        <Divider />
        {/* <Menu /> */}
        <Socials />
      </Content>
    </Wrapper>
  );
};

export default Footer;
