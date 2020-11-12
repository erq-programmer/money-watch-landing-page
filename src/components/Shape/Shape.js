import React from 'react';
import styled from 'styled-components';
import ShapeSVG from '../../images/Shape.svg';
import ShoppingIllustration from '../../images/ShoppingIllustration.svg';

const Wrapper = styled.section`
  width: 140%;
  position: relative;
  height: 60vh;
  z-index: -1;
`;

const ShapeImage = styled.img`
  transform: rotate(75deg);
  position: absolute;
  margin-top: -40px;
  width: 100%;
`;

const ShoppingImage = styled.img`
  position: absolute;
  left: 90px;
  top: 100px;
  margin-top: -40px;
  width: 90%;
`;

const Shape = () => {
  return (
    <Wrapper>
      <ShapeImage src={ShapeSVG} alt="" />
      <ShoppingImage src={ShoppingIllustration} alt="" />
    </Wrapper>
  );
};

export default Shape;
