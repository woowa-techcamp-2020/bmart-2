import React from 'react';
import ReactDOM from 'react-dom';
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
