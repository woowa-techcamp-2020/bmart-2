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
  CartTitle,
  IconWrapper,
  StyledCartHeader,
} from './Cart.styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { isLogin } from '../../util/common';

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

  const checkOrder = () => {
    if(isLogin()) {
      order(cartDispatch, carts);
      openNotification(pageDispatch, '주문 완료!');
    } else {
      openNotification(pageDispatch, '로그인이 필요합니다.');
    }
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
          onPointerUp={checkOrder}
        >
          구매하기
        </StyledCartButton>
      </StyledCartButtonWrapper>
    </StyledCartWrapper>
  );
};

export default Cart;
