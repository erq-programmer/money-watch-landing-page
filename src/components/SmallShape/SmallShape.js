import React from 'react';
import styled from 'styled-components';
import SmallShapeSVG from '../../images/SmallShape.svg';

const Shape = styled.img`
  position: absolute;
  left: 0;
  top: 25%;
  width: 40%;
`;

const SmallShape = () => {
  return <Shape src={SmallShapeSVG} alt="" />;
};

export default SmallShape;
