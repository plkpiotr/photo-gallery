import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import theme from 'theme/theme';
import MapContainer from 'components/MapContainer';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle/>
      <MapContainer/>
    </>
  </ThemeProvider>
);

export default App;
