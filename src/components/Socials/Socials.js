import React from 'react';
import { Icon } from '@iconify/react';
import bxlFacebook from '@iconify/icons-bx/bxl-facebook';
import bxlLinkedin from '@iconify/icons-bx/bxl-linkedin';
import bxlTwitter from '@iconify/icons-bx/bxl-twitter';
import bxlYoutube from '@iconify/icons-bx/bxl-youtube';
import bxlInstagram from '@iconify/icons-bx/bxl-instagram';
import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  text-align: center;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.gray3};
  font-size: ${({ theme }) => theme.size.xl};
  margin: 0 0.5rem;
  padding: 1rem;
`;

const Socials = () => {
  return (
    <Wrapper>
      <StyledIcon icon={bxlFacebook} />
      <StyledIcon icon={bxlLinkedin} />
      <StyledIcon icon={bxlTwitter} />
      <StyledIcon icon={bxlYoutube} />
      <StyledIcon icon={bxlInstagram} />
    </Wrapper>
  );
};

export default Socials;
