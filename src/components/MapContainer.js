import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Map from "./Map";

class MapContainer extends Component {
  render() {
    return (
      <TransformWrapper>
        <TransformComponent>
          <Map/>
        </TransformComponent>
      </TransformWrapper>
    );
  }
}
export default MapContainer;
