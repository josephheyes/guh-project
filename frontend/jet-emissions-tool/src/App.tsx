import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import HomePage from './pages/HomePage';

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
      <HomePage />
    </ThemeProvider>
    
  );
}

export default App;
