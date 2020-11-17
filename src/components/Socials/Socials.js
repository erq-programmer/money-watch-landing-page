import React from 'react';
import { Icon } from '@iconify/react';
import heartSolid from '@iconify/icons-clarity/heart-solid';
import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.gray3};
`;

const Socials = () => {
  return (
    <Wrapper>
      <StyledIcon icon={heartSolid} style={{ fontSize: '16px' }} />
    </Wrapper>
  );
};

export default Socials;
