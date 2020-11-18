import React from 'react';
import styled from 'styled-components';
import newsletter from '../../images/newsletter.svg';
import Button from '../Button/Button';
import { device } from '../../theme/device';
import Input from '../Input/Input';

const Wrapper = styled.section`
  padding: 3rem 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.secondary};
  position: relative;
  max-width: 1440px;
  height: 100%;

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
    width: 90%;
    margin: 0 auto;
    padding: 12rem 6rem;
    box-shadow: 0px 4px 14px 2px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24);
    border-radius: 2px;
  }
`;

const NewsletterImage = styled.img`
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
`;

const Heading = styled.h2`
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

const NewsletterForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Newsletter = () => {
  const [email, setEmail] = React.useState('');
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
          <Input
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(val) => setEmail({ email: val })}
          />
          <Button>Get Early Access</Button>
        </NewsletterForm>
      </Box>
    </Wrapper>
  );
};

export default Newsletter;
