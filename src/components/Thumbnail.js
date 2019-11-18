import styled from 'styled-components';

const Thumbnail = styled.div`
  width: 10px;
  height: 10px;
  background-image: url(${({url}) => (url)});
  background-size: cover;
  border-radius: 10px;
  border: 1px solid ${({border}) => (border)};
  position: relative;
  top: ${({top}) => (top)};
  left: ${({left}) => (left)};
  
  &:hover {
    cursor: pointer;
  }
`;

export default Thumbnail;

