import React from 'react';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { StyledFavoriteCheck } from './DibIcon.styles';

import { createDib, removeDib } from '../../apis/dib';
import { useDibState, useDibDispatch } from '../../context/dibContext';
import { IProduct } from '../../../../types/modelTypes';

interface IDibIconProps {
  product: IProduct;
}

const DibIcon = ({ product }: IDibIconProps) => {
  const dibState = useDibState();
  const dibDispatch = useDibDispatch();
  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    setStatus(dibState.find((data) => data.id === product.id) !== undefined);
  }, [dibState, product]);

  const clickDibIcon = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (status) {
      await removeDib(product.id);
      setStatus(false);
      dibDispatch({ type: 'REMOVE', productId: product.id });
    } else {
      await createDib({
        userId: 1,
        productId: product.id,
      });
      setStatus(true);
      dibDispatch({ type: 'ADD', product });
    }
  };
  return (
    <StyledFavoriteCheck
      checked={status}
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      name="checked"
      onClick={clickDibIcon}
    />
  );
};
export default DibIcon;
