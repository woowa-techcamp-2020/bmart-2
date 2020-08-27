import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CategoryContextProvider } from './context/categoryContext';
import { DibContextProvider } from './context/dibContext';
import { CartContextProvider } from './context/cartContext';
import { PageContextProvider } from './context/pageContext';

ReactDOM.render(
  <React.StrictMode>
    <PageContextProvider>
      <CartContextProvider>
        <DibContextProvider>
          <CategoryContextProvider>
            <App />
          </CategoryContextProvider>
        </DibContextProvider>
      </CartContextProvider>
    </PageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
