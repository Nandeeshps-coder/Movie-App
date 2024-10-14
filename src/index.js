import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import './index.css';

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
