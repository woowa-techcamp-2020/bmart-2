import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { CategoryContextProvider } from './context/categoryContext';

ReactDOM.render(
  <React.StrictMode>
    <CategoryContextProvider>
      <App />
    </CategoryContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
