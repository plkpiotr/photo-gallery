import styled from 'styled-components';

const Thumbnail = styled.div`
  width: 12px;
  height: 12px;
  background-image: url(${({url}) => (url)});
  background-size: cover;
  border-radius: 12px;
  border: 1px solid ${({border}) => (border)};
  position: relative;
  top: ${({top}) => (top)};
  left: ${({left}) => (left)};
  
  &:hover {
    cursor: pointer;
  }
`;

export default Thumbnail;

