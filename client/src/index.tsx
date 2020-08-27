import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CategoryContextProvider } from './context/categoryContext';
import { DibContextProvider } from './context/dibContext';
import { CartContextProvider } from './context/cartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <DibContextProvider>
        <CategoryContextProvider>
          <App />
        </CategoryContextProvider>
      </DibContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
