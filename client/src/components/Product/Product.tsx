import * as React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  StyledProduct,
  ImageWrapper,
  ProductTitle,
  ProductPrice,
} from './Product.styles';

import { IProduct } from '../../../../types/modelTypes';
import { numberToString } from '../../util/common';
import history from '../../history';
import DibIcon from '../DibIcon';

interface IProductProps {
  product: IProduct;
  size?: string;
}

const Product = ({ product, size }: IProductProps) => {
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
          <ImageWrapper url={product.thumbImgUrl} size={size}>
            {product.discount > 0 ? <div>{product.discount}%</div> : <></>}
            <DibIcon product={product} />
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
          <ImageWrapper url="" size={size}>
            <Skeleton
              variant="rect"
              style={{
                width: size === 'medium' ? '20vh' : '100%',
                height: '100%',
              }}
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
