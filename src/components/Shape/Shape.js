import React from 'react';
import styled from 'styled-components';
import ShapeMobileSVG from '../../images/Shape-mobile.svg';
import ShapeSVG from '../../images/Shape.svg';
import ShoppingIllustration from '../../images/ShoppingIllustration.svg';
import { device } from '../../theme/device';

const Wrapper = styled.section`
  width: 100%;
  z-index: -1;
  position: relative;

  @media ${device.laptop} {
    width: 100%;
    position: absolute;
    z-index: 0;
  }
`;

const ShapeImage = styled.img`
  width: 180%;
  position: relative;
  left: -30%;

  @media ${device.laptop} {
    position: absolute;
    top: -20vh;
    left: 40%;
    width: 180%;
    z-index: 20;
  }
`;

const ShoppingImage = styled.img`
  position: absolute;
  left: 3%;
  top: 10%;
  width: 120%;
  z-index: 2;

  @media ${device.laptop} {
    left: 60%;
    top: 15%;
    width: 50%;
  }
`;

const Shape = () => {
  return (
    <Wrapper>
      <ShapeImage src={ShapeMobileSVG} alt="" />
      <ShoppingImage src={ShoppingIllustration} alt="" />
    </Wrapper>
  );
};

export default Shape;
