import React from 'react';
import {
  StyledProductCountWrapper,
  StyledCountUp,
  StyledCountText,
  StyledCountDown,
  StyledProductWrapper,
  StyledProductContent,
  StyledProductImgWrapper,
  StyledProductInfoWrapper,
  StyledProductImg,
  StyledPurchaseWrapper,
  StyledProductPurchaseWrapper,
  StyledTotalPrice,
} from './CartProduct.styles';
import { numberToString } from '../../util/common';

interface ProductType {
  url: string;
  id: number;
  name: string;
  price: number;
  subcategory_id: number;
  stock: number;
  discount: number;
}

interface CarProductProps {
  product: ProductType;
}

export default function CartProduct({ product }: CarProductProps) {
  const [count, setCount] = React.useState(1);
  const countDown = () => {
    setCount(count - 1);
  };
  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <StyledProductWrapper>
      <StyledProductContent>
        <StyledProductImgWrapper>
          <StyledProductImg src={product.url}></StyledProductImg>
        </StyledProductImgWrapper>
        <StyledPurchaseWrapper>
          <StyledProductInfoWrapper>
            <div>
              <h4>{product.name}</h4>
              <button>삭제</button>
            </div>
            <span>{numberToString(product.price)}원</span>
          </StyledProductInfoWrapper>
          <StyledProductPurchaseWrapper>
            <StyledTotalPrice>
              <span>{numberToString(product.price * count)}원</span>
            </StyledTotalPrice>
            <StyledProductCountWrapper>
              <StyledCountUp onPointerUp={countUp} count={count} />
              <StyledCountText>{count}</StyledCountText>
              <StyledCountDown onPointerUp={countDown} count={count} />
            </StyledProductCountWrapper>
          </StyledProductPurchaseWrapper>
        </StyledPurchaseWrapper>
      </StyledProductContent>
    </StyledProductWrapper>
  );
}

CartProduct.defaultProps = {
  product: {
    url: 'https://image.auction.co.kr/itemimage/1a/c1/04/1ac1047af6.jpg',
    id: 1,
    name: '페브리즈 333ml',
    price: 2400,
    subcategory_id: 1,
    stock: 123,
    discount: 0,
  },
} as Partial<CarProductProps>;
