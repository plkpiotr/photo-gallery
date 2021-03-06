import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:700&display=swap&subset=latin-ext');  
  
  body {
    font-family: 'Titillium Web', sans-serif;
    background-color: ${({theme}) => (theme.quaternary)};
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
