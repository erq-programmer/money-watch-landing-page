import React from 'react';
import styled from 'styled-components';
import newsletter from '../../images/newsletter.svg';
import Button from '../Button/Button';
import { device } from '../../theme/device';

const Wrapper = styled.section`
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.color.secondary};

  @media ${device.laptop} {
    background-color: ${({ theme }) => theme.color.white};
  }
`;

const Box = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 4rem 2rem;
  display: grid;
  justify-items: center;
  text-align: center;

  @media ${device.laptop} {
    width: 80%;
    margin: 0 auto;
  }
`;

const NewsletterImage = styled.img`
  width: 80%;

  @media ${device.laptop} {
    width: 30%;
    margin: 0 auto;
  }
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.color.grey1};
  letter-spacing: 0.2px;
  line-height: 46px;
  font-weight: ${({ theme }) => theme.font.bold};
  padding: 3rem 0 2rem;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.color.grey3};
  letter-spacing: 0.2px;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.regular};
  padding-bottom: 20px;
`;

const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.color.secondary};
  padding: 1rem 1rem;
  width: 100%;
  height: 58px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.grey3};
`;

const Newsletter = () => {
  return (
    <Wrapper>
      <Box>
        <NewsletterImage src={newsletter} alt="" />
        <Heading>Duis aute irure dolor in reprehenderit in</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <Input placeholder="E-mail" />
        <Button>Get Early Access</Button>
      </Box>
    </Wrapper>
  );
};

export default Newsletter;
