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
import history from '../../history';

interface IProductProps {
  product: IProduct;
}

const Product = ({ product }: IProductProps) => {
  const clickDibIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const productClickHandler = () => {
    history.push({
      pathname: '/detail',
      state: { product },
    });
  };

  return (
    <>
      {product ? (
        <StyledProduct onClick={productClickHandler}>
          <ImageWrapper>
            <img
              style={{ width: '100%', height: '100%' }}
              alt={product.name}
              src={product.thumbImgUrl}
            />
            {product.discount > 0 ? <div>{product.discount}%</div> : <></>}
            <StyledFavoriteCheck
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checked"
              onClick={clickDibIcon}
            />
          </ImageWrapper>
          <ProductTitle>{product.name} </ProductTitle>
          <ProductPrice>
            {product.discount > 0 ? (
              <span>{numberToString(product.price)}원</span>
            ) : (
              <></>
            )}
            {numberToString(
              Math.floor((product.price * (100 - product.discount)) / 100)
            )}
            원
          </ProductPrice>
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
