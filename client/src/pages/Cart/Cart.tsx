import React from 'react';
import { useCartState, ICartInContext, order } from '../../context/cartContext';
import CartProductList from '../../components/CartProductList';
import CartSummary from '../../components/CartSummary';
import { usePageDispatch, openNotification } from '../../context/pageContext';

import {
  StyledCartButton,
  StyledCartWrapper,
  StyledCartButtonWrapper,
  StyledCartIcon,
  CartTitle,
  IconWrapper,
  StyledCartHeader,
} from './Cart.styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Cart = () => {
  const carts: ICartInContext[] = useCartState();
  const pageDispatch = usePageDispatch();

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
        <CartTitle>
          <IconWrapper>
            <ShoppingCartIcon />
          </IconWrapper>
          <span>장바구니</span>
        </CartTitle>
      </StyledCartHeader>
      <CartProductList carts={carts} />
      <CartSummary totalPrice={getTotalPrice()} />
      <StyledCartButtonWrapper>
        <StyledCartButton
          onPointerUp={() => {
            order(carts);
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
