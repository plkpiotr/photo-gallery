import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  width: 2vw;
  border: 0;
  transition: .4s ease-in-out;
  padding: 0;
  outline: none;
  
  &:after {
    counter-increment: section;
    font-family: 'Titillium Web', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${({theme}) => (theme.white)};
    width: 100%;
    content: ""counter(section)"";  
  }
  
  &.is-selected:after {
    background-color: ${({theme}) => (theme.secondary)};
    transition: .4s ease-in-out;
  }
`;

const CarouselButtons = ({selected, onClick}) => (
  <Button
    className={selected ? " is-selected" : ""}
    onClick={onClick}>
  </Button>
);

export default CarouselButtons;
