import styled from 'styled-components';

const Checkbox = styled.input`
  display: none;
  
  + span {
    cursor: pointer;
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: ${({theme}) => (theme.quaternary)};
    align-items: center;
    justify-content: center;
    margin: 4vh 2vw;
    border: 5px solid ${({color}) => (color)};
    box-sizing: border-box;
    -webkit-box-shadow: 5px 5px 17px 0 rgba(0,0,0,0.52); 
    box-shadow: 5px 5px 17px 0 rgba(0,0,0,0.52);
    transition: .4s ease-in-out;

    &::before {
      content: '${({icon}) => (icon)}';
      font-family: 'Material Icons', fantasy;
      font-size: 40px;
      color: ${({theme}) => (theme.secondary)};
      transition: .4s ease-in-out;
    }
    
    &:hover::before {
      color: ${({ theme }) => (theme.tertiary)};
      transition: .4s ease-in-out;
    }
  }
  
  &:checked {
    + span {
      border-width: 30px;
      transition: .4s ease-in-out;
      
      &::before {
        color: ${({theme}) => (theme.quaternary)};
      }
      
      &:hover::before {
        color: ${({ theme }) => (theme.tertiary)};
        transition: .4s ease-in-out;
      }
    }
  }
`;

export default Checkbox;
