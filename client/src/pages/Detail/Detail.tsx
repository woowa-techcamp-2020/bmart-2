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
  MainImage,
  Description,
  StyledDivider,
  StyledCardButtonWrapper,
  StyledFormatQuoteIcon,
  StyledLeftformatQueteIcon,
  StyledPriceDiscount,
  StyledFavoriteCheck,
} from './Detail.styles';

import SelectList from '../../components/SelectList';
import { numberToString } from '../../util/common';
import { IProduct } from '../../../../types/modelTypes';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

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
        <StyledImage className="image" src={product.mainImgUrl}>
          <StyledFavoriteCheck
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checked"
          />
        </StyledImage>
        <StyledNameText>{product.name}</StyledNameText>
        <StyledPriceText>
          {product.discount > 0 ? (
            <>
              <span>{product.discount}%</span>
              <StyledPriceDiscount>{product.price}원</StyledPriceDiscount>{' '}
            </>
          ) : (
            <></>
          )}
          {numberToString(
            Math.floor((product.price * (100 - product.discount)) / 100)
          )}
          원
        </StyledPriceText>
        <InfoContent>
          <InfoTitle>배달 정보</InfoTitle>
          <div>
            지금은 운영 시간이 아니에요{' '}
            <span role="img" aria-label="tt">
              😢
            </span>
          </div>
        </InfoContent>
        <InfoContent>
          <InfoTitle>적립 혜택</InfoTitle>
          <div>배민 페이로 결제하면 0.5% 적립</div>
        </InfoContent>
        <StyledDivider />
        <Description>
          <StyledLeftformatQueteIcon />
          {product.description}
          <StyledFormatQuoteIcon />
        </Description>
        <MainImage src={product.mainImgUrl} />
        <StyledCardButtonWrapper>
          <StyledCartButton onPointerUp={onClick}>담기</StyledCartButton>
        </StyledCardButtonWrapper>
      </StyledDetialWrapper>
      <SelectList
        openList={openList}
        setOpenList={setOpenList}
        product={product}
      />
    </>
  );
};

export default Detail;
