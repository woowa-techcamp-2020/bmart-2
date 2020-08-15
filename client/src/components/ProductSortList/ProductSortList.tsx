import * as React from 'react';
import {
  StyledListWrapper,
  StyledSortList,
  StyledListTitle,
  SortIcon,
} from './ProductSortList.styles';
import Product from '../Product';

import { Grid } from '@material-ui/core';

interface ProductSortListType {}

const sortType = [
  '기본 정렬순',
  '인기 상품순',
  '금액 높은순',
  '금액 낮은순',
  '신규 상품순',
  '할인율 순',
];
const items = [1, 2, 3, 4, 5, 6];
const ProductSortList = () => {
  const renderProduct = () => {
    return items.map((item, index) => (
      <Grid item xs={6} sm={4} key={'sort-list' + index}>
        <Product />
      </Grid>
    ));
  };
  return (
    <>
      <StyledListWrapper>
        <StyledListTitle>
          {sortType[0]} <SortIcon />
        </StyledListTitle>
        <StyledSortList container spacing={2}>
          {renderProduct()}
        </StyledSortList>
      </StyledListWrapper>
    </>
  );
};

export default ProductSortList;
