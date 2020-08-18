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

const data = {
  price: 3400,
  max_quantity: 10,
  name: '[다담] 찌개 양념장 6종',
  discount: 0,
  subCategory: '서브카테고리',
  stock: 100,
  imgUrl: 'https://img-cf.kurly.com/shop/data/goods/1530775904381y0.jpg',
};

// TODO
// Util > 가격 string으로 변환 후 보여줘야함
// 상세 페이지 내용 추가되어야 함

const Detail = () => {
  const [openList, setOpenList] = React.useState(false);

  const onClick = React.useCallback(() => {
    setOpenList(true);
  }, [openList]);

  return (
    <StyledDetialWrapper>
      <StyledImage className="image" src={data.imgUrl} />
      <StyledNameText>{data.name}</StyledNameText>
      <StyledPriceText>{data.price}원</StyledPriceText>
      <InfoContent>
        <InfoTitle>배달 정보</InfoTitle>
        <div> 😢 지금은 운영 시간이 아니에요</div>
      </InfoContent>
      <StyledCartButton onPointerUp={onClick}>담기</StyledCartButton>
      <SelectList
        openList={openList}
        setOpenList={setOpenList}
        data={data}
      ></SelectList>
    </StyledDetialWrapper>
  );
};

export default Detail;
