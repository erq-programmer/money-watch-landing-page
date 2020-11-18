import React from 'react';
import styled from 'styled-components';
import contactIllustration from '../../images/contact.svg';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { device } from '../../theme/device';

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 12rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  grid-template-areas:
    'heading heading'
    'text text'
    'illustration illustration'
    'form form';
  text-align: center;

  @media ${device.laptop} {
    grid-template-areas:
      'heading .'
      'text .'
      'form illustration'
      'form illustration';
    align-items: center;
    text-align: left;
  }
`;

const ContactIllustration = styled.img`
  width: 80%;
  max-width: 500px;
  margin: 4rem auto;
  grid-area: illustration;
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.color.gray1};
  letter-spacing: 0.2px;
  line-height: 46px;
  font-weight: ${({ theme }) => theme.font.bold};
  padding: 3rem 0 2rem;
  margin: 0;
  grid-area: heading;

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
  grid-area: text;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0 2rem;
  grid-area: form;

  @media ${device.laptop} {
    padding: 0;
    align-items: flex-start;

    & > button {
      align-self: flex-start;
    }
  }
`;

const Contact = () => {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <Wrapper id="contact">
      <Heading>Contact</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa.
      </Text>
      <ContactIllustration src={contactIllustration} alt="" />
      <ContactForm>
        <Input
          name="name"
          label="Name"
          type="text"
          value={state.name}
          onChange={(val) => setState({ ...state, name: val })}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          value={state.email}
          onChange={(val) => setState({ ...state, email: val })}
        />

        <Input
          as="textarea"
          name="message"
          label="Message"
          type="text"
          value={state.message}
          onChange={(val) => setState({ ...state, message: val })}
        />
        <Button>Send message</Button>
      </ContactForm>
    </Wrapper>
  );
};

export default Contact;
