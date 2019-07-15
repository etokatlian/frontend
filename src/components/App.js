import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { teal, deepPurple, red } from '@material-ui/core/colors';

import '../App.css';
import AppRoutes from '../routes';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepPurple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <AppRoutes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
