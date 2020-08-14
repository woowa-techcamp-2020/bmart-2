import * as React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import {
  StyledProduct,
  ImageWrapper,
  ProductTitle,
  ProductPrice,
  StyledFavoriteCheck,
} from './Product.styles';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core';

interface ProductType {
  url: string;
  id: number;
  name: string;
  price: number;
  subcategory_id: number;
  stock: number;
  discount: number;
}

const Product = () => {
  const [image, setImage] = React.useState<ProductType | null>({
    url: 'https://image.auction.co.kr/itemimage/1a/c1/04/1ac1047af6.jpg',
    id: 1,
    name: '페브리즈 333ml',
    price: 2400,
    subcategory_id: 1,
    stock: 123,
    discount: 0,
  });

  return (
    <>
      {image ? (
        <StyledProduct>
          <ImageWrapper>
            <img
              style={{ width: '100%', height: '100%' }}
              alt={'asdf'}
              src={image.url}
            />
            <StyledFavoriteCheck
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checked"
            />
          </ImageWrapper>
          <ProductTitle>페브리즈 탈취제 370ml </ProductTitle>
          <ProductPrice>2,700원</ProductPrice>
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
