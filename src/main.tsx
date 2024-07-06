import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f4ebfa',
      main: '#D0AEED',
      dark: '#6d30ad',
      contrastText: '#000',
    },
    secondary: {
      light: '#fefae5',
      main: '#F9E894',
      dark: '#edaa1f',
      contrastText: '#000',
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />

    </ThemeProvider>
  </React.StrictMode>,
)
