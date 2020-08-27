import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { StyledFab, StyledCount } from './CartButton.styles';

export default function CartButton() {
  return (
    <StyledFab color="secondary" aria-label="edit">
      <ShoppingCartIcon color="inherit" />
      <StyledCount>10</StyledCount>
    </StyledFab>
  );
}
