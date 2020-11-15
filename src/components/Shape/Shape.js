import React from 'react';
import styled from 'styled-components';
import ShapeMobileSVG from '../../images/Shape-mobile.svg';
import ShoppingIllustration from '../../images/ShoppingIllustration.svg';

const Wrapper = styled.section`
  width: 180%;
  position: relative;
  left: 5%;
  z-index: -1;
`;

const ShapeImage = styled.img`
  /* transform: rotate(75deg); */
  /* position: absolute; */
  /* margin-top: -40px; */
  width: 100%;
  /* max-height: 500px; */
`;

const ShoppingImage = styled.img`
  position: absolute;
  left: 30%;
  top: 10%;
  width: 70%;
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
