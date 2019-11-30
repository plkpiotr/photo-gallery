import React, {Component} from 'react';
import styled from 'styled-components';
import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch';
import Map from 'components/Map';

const Wrapper = styled.div`
  background-color: ${({theme}) => (theme.white)};
`;

class MapContainer extends Component {
  render() {
    return (
      <Wrapper>
        <TransformWrapper defaultScale={2.4}>
          <TransformComponent>
            <Map/>
          </TransformComponent>
        </TransformWrapper>
      </Wrapper>
    );
  }
}

export default MapContainer;
