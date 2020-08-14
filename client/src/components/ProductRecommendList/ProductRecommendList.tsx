import * as React from 'react';
import {
  StyledListTitle,
  StyledRecommendList,
  StyledListWrapper,
  StyledRefreshButton,
  StyledRefreshIcon,
} from './ProductRecommendList.styles';

import Product from '../Product';
import { Grid } from '@material-ui/core';

interface ProductRecommendListType {}

// test
const items = [1, 2, 3, 4, 5, 6];

const ProductRecommendList = ({}: ProductRecommendListType) => {
  const renderProduct = () => {
    return items.map((item, index) => (
      <Grid item xs={4} sm={3} key={'recommand-list' + index}>
        <Product />
      </Grid>
    ));
  };
  return (
    <StyledListWrapper>
      <StyledListTitle>지금 뭐 먹지?</StyledListTitle>
      <StyledRecommendList container spacing={2}>
        {renderProduct()}
      </StyledRecommendList>
      <StyledRefreshButton>
        <StyledRefreshIcon />
        지금 뭐 먹지? 다른 상품 보기
      </StyledRefreshButton>
    </StyledListWrapper>
  );
};
export default ProductRecommendList;
