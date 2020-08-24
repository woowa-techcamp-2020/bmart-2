import * as React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import {
  StyledProduct,
  ImageWrapper,
  ProductTitle,
  ProductPrice,
  StyledFavoriteCheck,
} from './Product.styles';

import { IProduct } from '../../../../types/modelTypes';
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

const Product = ({ product }: { product: IProduct }) => {
  return (
    <>
      {product ? (
        <StyledProduct>
          <ImageWrapper>
            <img
              style={{ width: '100%', height: '100%' }}
              alt="asdf"
              src={product.thumbImgUrl}
            />
            <StyledFavoriteCheck
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checked"
            />
          </ImageWrapper>
          <ProductTitle>{product.name} </ProductTitle>
          <ProductPrice>{numberToString(product.price)}원</ProductPrice>
        </StyledProduct>
      ) : (
        <StyledProduct>
          <ImageWrapper>
            <Skeleton
              variant="rect"
              style={{ width: '100%', height: '100%' }}
            />
          </ImageWrapper>
          <ProductTitle>
            <Skeleton style={{ width: '100%', height: '100%' }} />
          </ProductTitle>
          <ProductPrice>
            <Skeleton style={{ width: '50%', height: '100%' }} />
          </ProductPrice>
        </StyledProduct>
      )}
    </>
  );
};

export default Product;
