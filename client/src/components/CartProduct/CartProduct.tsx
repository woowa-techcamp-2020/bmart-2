import React from 'react';
import { IProduct } from '../../../../types/modelTypes';
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
import {
  useCartDispatch,
  updateCart,
  removeCart,
} from '../../context/cartContext';

interface CarProductProps {
  product: IProduct;
  count: number;
}

export default function CartProduct({ product, count }: CarProductProps) {
  const dispatch = useCartDispatch();
  return (
    <StyledProductWrapper>
      <StyledProductContent>
        <StyledProductImgWrapper>
          <StyledProductImg src={product.thumbImgUrl}></StyledProductImg>
        </StyledProductImgWrapper>
        <StyledPurchaseWrapper>
          <StyledProductInfoWrapper>
            <div>
              <h4>{product.name}</h4>
              <button
                onPointerUp={() => {
                  removeCart(dispatch, product.id);
                }}
              >
                삭제
              </button>
            </div>
            <span>{numberToString(product.price)}원</span>
          </StyledProductInfoWrapper>
          <StyledProductPurchaseWrapper>
            <StyledTotalPrice>
              <span>{numberToString(product.price * count)}원</span>
            </StyledTotalPrice>
            <StyledProductCountWrapper>
              <StyledCountUp
                onPointerUp={() => {
                  updateCart(dispatch, 1, product.id, count + 1);
                }}
                count={count}
              />
              <StyledCountText>{count}</StyledCountText>
              <StyledCountDown
                onPointerUp={() => {
                  updateCart(dispatch, 1, product.id, count - 1);
                }}
                count={count}
              />
            </StyledProductCountWrapper>
          </StyledProductPurchaseWrapper>
        </StyledPurchaseWrapper>
      </StyledProductContent>
    </StyledProductWrapper>
  );
}

CartProduct.defaultProps = {
  product: {
    id: 1,
    subcategoryId: 1,
    thumbImgUrl: 'https://img-cf.kurly.com/shop/data/goods/1530172373295l0.jpg',
    mainImgUrl:
      'http://img-cf.kurly.com/shop/data/goodsview/20180628/gv40000026292_1.jpg',
    description:
      '간단히 쪄 먹기도 좋고, 다양한 요리와 함께 곁들여 먹기도 좋은 감자는 우리 식탁에 빼놓을 수 없는 식재료지요. 탄수화물은 물론이고 단백질, 비타민C까지 풍부해 마치 곡류와 채소를 동시에 먹은 것과 같은 효과를 줍니다. 컬리는 그때그때 유명산지 감자를 가락시장에서 수급하여 보내드립니다. 포슬포슬한 식감에 고소하고 은은한 단맛이 나 볶음, 구이, 튀김 등 다양하게 요리해서 먹을 수 있어요. 매일 식탁에 올려도 질리지 않는 감자를 컬리에서 간편하게 만나보세요.',
    price: 2200,
    discount: 0,
    name: '[KF365] 햇 감자 1kg',
    maxQuantity: 5,
    stock: 100,
    removed: 0,
    createdAt: null,
    updatedAt: null,
  },
} as Partial<CarProductProps>;
