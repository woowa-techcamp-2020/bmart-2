import * as React from 'react';
import {
  StyledListTitle,
  StyledSlideList,
  StyledSlideListWrapper,
} from './ProductSlideList.styles';

import Product from '../Product';
import { Grid } from '@material-ui/core';

interface ProductSlideListType {}

// test
const items = [1, 2, 3, 4, 5, 6];

const ProductSlideList = ({}: ProductSlideListType) => {
  return (
    <StyledSlideListWrapper>
      <StyledListTitle>이수정님을 위해 준비한 상품</StyledListTitle>
      <StyledSlideList container spacing={2} wrap={'nowrap'}>
        {items.map((item, index) => (
          <Grid item style={{ minWidth: '150px' }} key={'slide-list' + index}>
            <Product></Product>
          </Grid>
        ))}
      </StyledSlideList>
    </StyledSlideListWrapper>
  );
};
export default ProductSlideList;
