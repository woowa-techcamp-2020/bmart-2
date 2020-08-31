import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { StyledFab, StyledCount } from './CartButton.styles';
import { useCartState, ICartInContext } from '../../context/cartContext';
import history from '../../history';
import { usePageDispatch, usePageState } from '../../context/pageContext';

const CartButton = () => {
  const carts: ICartInContext[] = useCartState();
  const pageDispatch = usePageDispatch();
  const pageState = usePageState();

  return ['/', '/category'].includes(pageState.pathname) ? (
    <StyledFab
      color="secondary"
      aria-label="edit"
      onPointerUp={(e) => {
        e.stopPropagation();
        history.push('/cart');
        pageDispatch!({
          type: 'PATHNAME_CHANGE',
          pathname: history.location.pathname,
        });
      }}
    >
      <ShoppingCartIcon color="inherit" />
      <StyledCount>{carts.length}</StyledCount>
    </StyledFab>
  ) : (
    <></>
  );
}

export default CartButton;