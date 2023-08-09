import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Container maxWidth="xl" sx={{position:"relative",padding:{xs:"0"}}}>
           <ThemeProvider theme={theme}>
            <App />
           </ThemeProvider>
    </Container>
  </React.Fragment>
);

reportWebVitals();
