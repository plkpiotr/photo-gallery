import styled from 'styled-components';

const Thumbnail = styled.div`
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
  transition: .3s ease-in-out;
  
  &:hover {
    cursor: pointer;
    transform: scale(2);
    transition: .3s ease-in-out;
  }
`;

export default Thumbnail;

