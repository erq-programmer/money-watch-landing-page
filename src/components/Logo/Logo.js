import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const AnchorWrapper = styled.a`
  display: block;
  width: 150px;
  height: 150px;
`;

const StyledImage = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${({ image }) => image});
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            src
          }
        }
      }
    }
  `);
  return (
    <AnchorWrapper href="/">
      <StyledImage image={data.file.childImageSharp.fixed.src} alt="" />
    </AnchorWrapper>
  );
};

export default Logo;
