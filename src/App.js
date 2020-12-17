import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { Desktop } from './layouts/Desktop';
import { Responsive } from './layouts/Responsive';
import { Hidden, ThemeProvider } from '@material-ui/core';
import theme from './ThemeConfig';
import { SnackbarProvider } from 'notistack';

function App() {
  const [paginaActive, setPaginaActive] = useState('1');
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        maxSnack={3}
      >
        <Router>
          <Hidden only={['md', 'xl', 'lg', 'sm']}>
            <Responsive />
          </Hidden>
          <Hidden only={['xs']}>
            <Desktop paginaActive={paginaActive} setPaginaActive={setPaginaActive} />
          </Hidden>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
