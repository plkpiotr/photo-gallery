import React from 'react';
import styled from 'styled-components';
import {TransformComponent, TransformWrapper} from 'react-zoom-pan-pinch';
import Map from 'components/Map';

const Wrapper = styled.div`
  background-color: ${({theme}) => (theme.white)};
`;

const MapContainer = ({activeCategories}) => (
  <Wrapper>
    <TransformWrapper defaultScale={2.1}>
      <TransformComponent>
        <Map activeCategories={activeCategories}/>
      </TransformComponent>
    </TransformWrapper>
  </Wrapper>
);

export default MapContainer;
