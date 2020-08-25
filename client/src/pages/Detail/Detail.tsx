import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledDetialWrapper,
  StyledCartButton,
  StyledImage,
  StyledNameText,
  StyledPriceText,
  InfoContent,
  InfoTitle,
} from './Detail.styles';

import SelectList from '../../components/SelectList';
import { numberToString } from '../../util/common';
import { IProduct } from '../../../../types/modelTypes';

const data = {
  price: 3400,
  max_quantity: 10,
  name: '[다담] 찌개 양념장 6종',
  discount: 0,
  subCategory: '서브카테고리',
  stock: 100,
  imgUrl: 'https://img-cf.kurly.com/shop/data/goods/1530775904381y0.jpg',
};

interface ILocationState {
  product: IProduct;
}

const Detail = () => {
  const [openList, setOpenList] = React.useState(false);
  const location = useLocation<ILocationState>();
  const { product } = location?.state;
  const onClick = () => {
    setOpenList(true);
  };

  return (
    <>
      <StyledDetialWrapper>
        <StyledImage className="image" src={product.mainImgUrl} />
        <StyledNameText>{product.name}</StyledNameText>
        <StyledPriceText>{numberToString(product.price)}원</StyledPriceText>
        <InfoContent>
          <InfoTitle>배달 정보</InfoTitle>
          <div>
            지금은 운영 시간이 아니에요{' '}
            <span role="img" aria-label="tt">
              😢
            </span>
          </div>
        </InfoContent>
        ㅎ<StyledCartButton onPointerUp={onClick}>담기</StyledCartButton>
      </StyledDetialWrapper>
      <SelectList openList={openList} setOpenList={setOpenList} data={data} />
    </>
  );
};

export default Detail;
