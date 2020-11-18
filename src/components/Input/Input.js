import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 400px;

  & > input,
  & > textarea {
    border: 2px solid ${({ theme }) => theme.color.secondary};
    border-radius: ${({ theme }) => theme.border.s};
    margin: 1rem 0;
    padding: 1rem 1rem;
    width: 100%;
    height: 58px;
    font-size: ${({ theme }) => theme.size.xs};
    color: ${({ theme }) => theme.color.gray2};
    outline: none;
    transition: all 0.2s ease;
  }

  & > textarea {
    height: 200px;
  }

  & > label {
    color: ${({ theme }) => theme.color.gray2};
    position: absolute;
    font-size: ${({ theme }) => theme.size.xs};
    top: 3rem;
    left: 1.6rem;
    transition: all 0.2s ease;

    ${({ focused, theme }) =>
      focused &&
      `
      font-size: 13px;
      transform: translate(-0.5rem, -2.8rem);
      background-color: ${theme.color.white};
      color: ${theme.color.primary};
      padding: 0 1rem;
    `}
  }
`;

const Input = ({ as, value, type, label, onChange, onFocus, onBlur, setRef, name }) => {
  const [focused, setFocused] = React.useState(false);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const renderLabel = () => label && <label htmlFor={name}>{label}</label>;

  const isFocused = focused || String(value).length || type === 'date';

  return (
    <InputContainer focused={isFocused}>
      {renderLabel()}
      {as ? (
        <textarea
          id={name}
          name={name}
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={(ref) => setRef(ref)}
        />
      ) : (
        <input
          id={name}
          name={name}
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={(ref) => setRef(ref)}
        />
      )}
    </InputContainer>
  );
};

Input.defaultProps = {
  inputId: '',
  type: 'text',
  label: '',
  onChange: (text) => {
    // eslint-disable-next-line no-console
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {},
};

export default Input;
