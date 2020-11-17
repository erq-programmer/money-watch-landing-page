import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import ShapeMobileSVG from '../../images/Shape-mobile.svg';
import ShapeSVG from '../../images/Shape.svg';
import Shaped from '../../images/Shaped.svg';
import ShoppingIllustration from '../../images/ShoppingIllustration.svg';
import { device } from '../../theme/device';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return isMobile ? children : null;
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

const ShapeMobile = styled.img`
  width: 190%;
  position: relative;
  left: -40%;
`;

const ShapeDesktop = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -300px;
  width: 50%;
`;

const ShoppingImage = styled.img`
  position: absolute;
  left: 3%;
  top: 10%;
  width: 120%;

  @media ${device.laptop} {
    left: 60%;
    padding-top: 10%;
    width: 50%;
  }
`;

const Shape = () => {
  return (
    <Wrapper>
      <Mobile>
        <ShapeMobile src={ShapeMobileSVG} alt="" />
      </Mobile>
      <Desktop>
        <ShapeDesktop src={Shaped} alt="" />
      </Desktop>
      <ShoppingImage src={ShoppingIllustration} alt="" />
    </Wrapper>
  );
};

export default Shape;
