import React from 'react';
import CartProduct from '../CartProduct';
import { StyledProductListWrapper } from './CartProductList.styles';

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

interface CartType {
  userId: number;
  count: number;
  product: ProductType;
}

interface CartProductListProp {
  carts: CartType[];
}

export default function CartProductList({ carts }: CartProductListProp) {
  const renderCartProduct = () => {
    return carts.map((cart) => (
      <CartProduct product={cart.product} count={cart.count} />
    ));
  };

  return (
    <StyledProductListWrapper>{renderCartProduct()}</StyledProductListWrapper>
  );
}
