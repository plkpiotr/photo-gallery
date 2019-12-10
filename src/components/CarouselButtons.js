import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  width: 2vw;
  min-height: 4vh;
  border: 0;
  transition: .4s ease-in-out;
  
  &:after {
    counter-increment: section;
    background-color: gold;
    width: 100%;
    content: ""counter(section)"";  
  }
  
  &.is-selected:after {
    background-color: aquamarine;
    transition: .4s ease-in-out;
  }
`;

const CarouselButtons = ({ selected, onClick }) => (
  <Button
    className={selected ? " is-selected" : ""}
    onClick={onClick}>
  </Button>
);

export default CarouselButtons;
