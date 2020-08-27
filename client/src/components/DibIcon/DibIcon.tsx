import React from 'react';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { StyledFavoriteCheck } from './DibIcon.styles';

import { createDib, removeDib } from '../../apis/dib';
import { useDibState, useDibDispatch } from '../../context/dibContext';
import { IProduct } from '../../../../types/modelTypes';

import { usePageDispatch, openNotification } from '../../context/pageContext';
interface IDibIconProps {
  product: IProduct;
}

const DibIcon = ({ product }: IDibIconProps) => {
  const dibState = useDibState();
  const dibDispatch = useDibDispatch();
  const [status, setStatus] = React.useState(false);
  const pageDispatch = usePageDispatch();

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
      openNotification(pageDispatch, '찜 삭제 완료!');
    } else {
      await createDib({
        userId: 1,
        productId: product.id,
      });
      setStatus(true);
      dibDispatch({ type: 'ADD', product });
      openNotification(pageDispatch, '찜 추가 완료!');
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
