import * as React from 'react';
import CartProductList from '../../components/CartProductList';
import {
  StyledCartButton,
  StyledCartWrapper,
  StyledCartButtonWrapper,
} from './Cart.styles';

const Cart = () => {
  return (
    <StyledCartWrapper>
      <h1>Cart</h1>
      <CartProductList />
      <StyledCartButtonWrapper>
        <StyledCartButton>담기</StyledCartButton>
      </StyledCartButtonWrapper>
    </StyledCartWrapper>
  );
};

export default Cart;
