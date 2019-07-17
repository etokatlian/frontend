import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { teal, deepPurple, red, pink } from '@material-ui/core/colors';

import '../App.css';
import AppRoutes from '../routes';
import { GlobalContextProvider } from './globalState';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalContextProvider>
        <AppRoutes />
      </GlobalContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
