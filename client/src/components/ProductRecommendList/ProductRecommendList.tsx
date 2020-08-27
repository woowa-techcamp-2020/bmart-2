import React, { useEffect, useState } from 'react';
import {
  StyledListTitle,
  StyledRecommendList,
  StyledListWrapper,
  StyledRefreshButton,
  StyledRefreshIcon,
} from './ProductRecommendList.styles';

import { getRecommendProducts } from '../../apis/product';
import { IProduct } from '../../../../types/modelTypes';
import Product from '../Product';
import { Grid } from '@material-ui/core';

interface ProductRecommendListType {}

const ProductRecommendList = ({}: ProductRecommendListType) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetchLatestData();
  }, []);

  const fetchLatestData = async () => {
    const res = await getRecommendProducts();
    setProducts(res.result);
  };

  const renderProduct = () => {
    if (products.length === 0) {
      const skeletonProducts = new Array(12).fill(0);
      return skeletonProducts.map((product, index) => (
        <Grid item xs={4} sm={3} key={'recommand-list' + index}>
          <Product product={product} size={'small'} />
        </Grid>
      ));
    }
    return (
      products &&
      products.map((product, index) => (
        <Grid item xs={4} sm={3} key={'recommand-list' + index}>
          <Product product={product} size={'small'} />
        </Grid>
      ))
    );
  };
  return (
    <StyledListWrapper>
      <StyledListTitle>지금 뭐 먹지?</StyledListTitle>
      <StyledRecommendList container spacing={2}>
        {renderProduct()}
      </StyledRecommendList>
      <StyledRefreshButton onClick={() => fetchLatestData()}>
        <StyledRefreshIcon />
        지금 뭐 먹지? 다른 상품 보기
      </StyledRefreshButton>
    </StyledListWrapper>
  );
};
export default ProductRecommendList;
