import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import SmallShapeSVG from '../../images/SmallShape.svg';
import { device } from '../../theme/device';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return isMobile ? children : null;
};

const ShapeDesktop = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -300px;
  width: 50%;
`;

const SmallShape = () => {
  return <ShapeDesktop src={SmallShapeSVG} alt="" />;
};

export default SmallShape;
