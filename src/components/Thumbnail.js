import styled from 'styled-components';
import ScrollTo from 'react-scroll-into-view';

const Thumbnail = styled(ScrollTo)`
  margin: -14px;
  width: 12px;
  height: 12px;
  background-image: url(${({url}) => (url)});
  background-size: cover;
  border-radius: 12px;
  border: 1px solid ${({border}) => (border)};
  position: relative;
  top: ${({top}) => (top)};
  left: ${({left}) => (left)};
  transition: .4s ease-in-out;
  
  &:hover {
    cursor: pointer;
    transform: scale(2);
    transition: .4s ease-in-out;
  }
`;

export default Thumbnail;

