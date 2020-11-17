import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const AnchorWrapper = styled.a`
  display: block;
  width: ${({ footer }) => (footer ? '100px' : '150px')};
  height: ${({ footer }) => (footer ? '100px' : '150px')};
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Logo = ({ footer }) => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <AnchorWrapper footer={footer} href="/">
      <StyledImage fluid={data.file.childImageSharp.fluid} alt="" />
    </AnchorWrapper>
  );
};

export default Logo;
