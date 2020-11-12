import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${({ theme, outline }) => (outline ? 'transparent' : theme.color.primary)};
  padding: 2rem 4rem;
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme, outline }) => (outline ? theme.color.primary : 'white')};
  font-weight: ${({ theme }) => theme.font.bold};
  display: block;
  border: ${({ theme, outline }) => (outline ? `2px solid ${theme.color.primary}` : 'none')};
  margin: 1rem 0;
  border-radius: ${({ theme }) => theme.border.s};
  width: 60vw;
`;

const Button = ({ outline, children }) => {
  return (
    <ButtonStyle outline={outline} type="button">
      {children}
    </ButtonStyle>
  );
};

export default Button;
