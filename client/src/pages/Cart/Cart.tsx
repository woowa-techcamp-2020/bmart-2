import React from 'react';
import { useCartState, ICartInContext, order } from '../../context/cartContext';
import CartProductList from '../../components/CartProductList';
import CartSummary from '../../components/CartSummary';

import {
  StyledCartButton,
  StyledCartWrapper,
  StyledCartButtonWrapper,
  StyledCartIcon,
  StyledCartIconWrapper,
  StyledCartHeader,
} from './Cart.styles';

const Cart = () => {
  const carts: ICartInContext[] = useCartState();

  const getTotalPrice = (): number => {
    return carts.reduce(
      (acc: number, cart: ICartInContext): number =>
        acc + cart.product.price * cart.count,
      0
    );
  };

  return (
    <StyledCartWrapper>
      <StyledCartHeader>
        <StyledCartIconWrapper>
          <StyledCartIcon />
        </StyledCartIconWrapper>
        <div>
          <h2>장바구니</h2>
        </div>
      </StyledCartHeader>
      <CartProductList carts={carts} />
      <CartSummary totalPrice={getTotalPrice()} />
      <StyledCartButtonWrapper>
        <StyledCartButton
          onPointerUp={() => {
            order(carts);
          }}
        >
          구매하기
        </StyledCartButton>
      </StyledCartButtonWrapper>
    </StyledCartWrapper>
  );
};

export default Cart;
