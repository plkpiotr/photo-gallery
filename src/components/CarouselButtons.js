import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  width: 4vw;
  min-height: 4vh;
  border: 0;
  
  &:after {
    background-color: gold;
    width: 100%;
    height: 2vh;
    content: "";
  }
  
  &.is-selected:after {
    background-color: aquamarine;
  }
`;

const CarouselButtons = ({ selected, onClick }) => (
  <Button
    className={selected ? " is-selected" : ""}
    onClick={onClick}>
  </Button>
);

export default CarouselButtons;
