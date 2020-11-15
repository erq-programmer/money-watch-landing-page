import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const AnchorWrapper = styled.a`
  display: block;
  width: 150px;
  height: 150px;
`;

const StyledImage = styled(Image)`
  width: 150px;
  height: 150px;
`;

const Logo = () => {
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
    <AnchorWrapper href="/">
      <StyledImage fluid={data.file.childImageSharp.fluid} alt="" />
    </AnchorWrapper>
  );
};

export default Logo;
