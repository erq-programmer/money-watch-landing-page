import React from 'react';
import styled from 'styled-components';
import newsletter from '../../images/newsletter.svg';
import Button from '../Button/Button';
import { device } from '../../theme/device';

const Wrapper = styled.section`
  padding: 3rem 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.secondary};
  position: relative;
  max-width: 1440px;
  min-height: 100vh;

  @media ${device.laptop} {
    background-color: transparent;
  }
`;

const Box = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 12rem 2rem;
  display: grid;
  justify-items: center;
  text-align: center;

  @media ${device.laptop} {
    padding: 12rem 6rem;
    margin: 0 auto;
    box-shadow: 0px 4px 14px 2px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24);
    border-radius: 2px;
  }
`;

const NewsletterImage = styled.img`
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.color.gray1};
  letter-spacing: 0.2px;
  line-height: 46px;
  font-weight: ${({ theme }) => theme.font.bold};
  padding: 3rem 0 2rem;
  margin: 0;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.color.gray3};
  letter-spacing: 0.2px;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.regular};
  padding: 0 0 3rem;

  @media ${device.laptop} {
    width: 50%;
  }
`;

const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.color.secondary};
  padding: 1rem 1rem;
  width: 100%;
  max-width: 500px;
  height: 58px;
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.color.gray3};
  border-radius: ${({ theme }) => theme.border.s};

  @media ${device.tablet} {
    margin-right: 1rem;
  }
`;

const NewsletterForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Newsletter = () => {
  return (
    <Wrapper id="about">
      <Box>
        <NewsletterImage src={newsletter} alt="" />
        <Heading>Duis aute irure dolor in reprehenderit in</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <NewsletterForm>
          <Input placeholder="E-mail" />
          <Button>Get Early Access</Button>
        </NewsletterForm>
      </Box>
    </Wrapper>
  );
};

export default Newsletter;
