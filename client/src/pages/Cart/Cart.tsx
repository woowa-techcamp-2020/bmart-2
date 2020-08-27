import React from 'react';
import {
  useCartState,
  ICartInContext,
  order,
  useCartDispatch,
} from '../../context/cartContext';
import CartProductList from '../../components/CartProductList';
import CartSummary from '../../components/CartSummary';
import { usePageDispatch, openNotification } from '../../context/pageContext';

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
  const pageDispatch = usePageDispatch();
  const cartDispatch = useCartDispatch();

  const getTotalPrice = (): number => {
    return carts.reduce(
      (acc: number, cart: ICartInContext): number =>
        acc + cart.product.price * cart.count,
      0
    );
  };

  return (
    <StyledCartWrapper maxWidth="md">
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
            order(cartDispatch, carts);
            openNotification(pageDispatch, '주문 완료!');
          }}
        >
          구매하기
        </StyledCartButton>
      </StyledCartButtonWrapper>
    </StyledCartWrapper>
  );
};

export default Cart;
