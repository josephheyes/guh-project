import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import HomePage from './pages/HomePage';
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import Icon from '@mdi/react'
import { mdiAirplane } from '@mdi/js';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00b4c5",
    },
    secondary: {
      main: "#00bf7d",
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar elevation={1} sx={{
        backgroundColor: (theme) => theme.palette.primary.main
      }} position='static'>
        <Toolbar>
          <Icon path={mdiAirplane} size={1} spin />
          <Typography variant='h6' sx={{ 
            flexGrow: 1,
            ml: '10px'
          }}>
            Jet Emissions Tool
          </Typography>
        </Toolbar>
      </AppBar>
      <HomePage />
    </ThemeProvider>
    
  );
}

export default App;
