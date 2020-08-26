import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CategoryContextProvider } from './context/categoryContext';
import { DibContextProvider } from './context/dibContext';

ReactDOM.render(
  <React.StrictMode>
    <DibContextProvider>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </DibContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
