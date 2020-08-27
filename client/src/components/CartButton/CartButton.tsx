import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { StyledFab, StyledCount } from './CartButton.styles';
import { useCartState, ICartInContext } from '../../context/cartContext';

export default function CartButton() {
  const carts: ICartInContext[] = useCartState();
  console.log(carts);
  return (
    <StyledFab color="secondary" aria-label="edit">
      <ShoppingCartIcon color="inherit" />
      <StyledCount>{carts.length}</StyledCount>
    </StyledFab>
  );
}
