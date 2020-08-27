import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { StyledFab, StyledCount } from './CartButton.styles';
import { useCartState, ICartInContext } from '../../context/cartContext';
import history from '../../history';

interface IHeaderProps {
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

export default function CartButton({ path, setPath }: IHeaderProps) {
  const carts: ICartInContext[] = useCartState();

  return ['/', '/category'].includes(path) ? (
    <StyledFab color="secondary" aria-label="edit">
      <ShoppingCartIcon color="inherit" />
      <StyledCount>{carts.length}</StyledCount>
    </StyledFab>
  ) : (
    <></>
  );
}
