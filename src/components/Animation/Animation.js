import styled, {css} from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Animation = styled(ReactCSSTransitionGroup)`
  ${({galleries}) => (
    galleries && css`
      display: flex;
      flex-wrap: wrap;                              
    `
)}
  
  ${({transitionName}) => `.${transitionName}-enter`} {
    opacity: 0;
  }
  
  ${({transitionName}) => `.${transitionName}-enter.${transitionName}-enter-active`} {
    opacity: 1;
    transition: opacity .8s ease-in-out;
  }

  ${({transitionName}) => `.${transitionName}-appear`},
  ${({transitionName}) => `.${transitionName}-leave.${transitionName}-leave-active`} {
    opacity: 0;
    transition: opacity .8s ease-in-out;
  }
  
  ${({transitionName}) => `.${transitionName}-leave`},
  ${({transitionName}) => `.${transitionName}-appear.${transitionName}-appear-active`} {
    opacity: 1;
  }
`;

export default Animation;
