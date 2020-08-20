import * as React from 'react';
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

const data = {
  price: 3400,
  max_quantity: 10,
  name: '[다담] 찌개 양념장 6종',
  discount: 0,
  subCategory: '서브카테고리',
  stock: 100,
  imgUrl: 'https://img-cf.kurly.com/shop/data/goods/1530775904381y0.jpg',
};

const Detail = () => {
  const [openList, setOpenList] = React.useState(false);

  const onClick = () => {
    setOpenList(true);
  };

  return (
    <>
      <StyledDetialWrapper>
        <StyledImage className="image" src={data.imgUrl} />
        <StyledNameText>{data.name}</StyledNameText>
        <StyledPriceText>{numberToString(data.price)}원</StyledPriceText>
        <InfoContent>
          <InfoTitle>배달 정보</InfoTitle>
          <div>
            <span role="img" aria-label="tt">
              😢
            </span>
            지금은 운영 시간이 아니에요
          </div>
        </InfoContent>
        ㅎ<StyledCartButton onPointerUp={onClick}>담기</StyledCartButton>
      </StyledDetialWrapper>
      <SelectList
        openList={openList}
        setOpenList={setOpenList}
        data={data}
      ></SelectList>
    </>
  );
};

export default Detail;
