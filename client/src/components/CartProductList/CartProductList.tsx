import React from 'react';
import CartProduct from '../CartProduct';
import { StyledProductListWrapper } from './CartProductList.styles';
import { ICartInContext } from '../../context/cartContext';
interface ProductType {
  id: number;
  subcategoryId: number;
  thumbImgUrl: string;
  mainImgUrl: string;
  description: string;
  price: number;
  discount: number;
  name: string;
  maxQuantity: number;
  stock: number;
  removed: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export default function CartProductList({
  carts,
}: {
  carts: ICartInContext[];
}) {
  const renderCartProduct = () => {
    return carts.map((cart, i) => (
      <CartProduct
        product={cart.product}
        count={cart.count}
        key={`cartProduct_${i}`}
      />
    ));
  };

  return (
    <StyledProductListWrapper>{renderCartProduct()}</StyledProductListWrapper>
  );
}
