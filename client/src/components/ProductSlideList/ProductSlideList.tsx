import React, { useEffect, useState } from 'react';
import {
  StyledListTitle,
  StyledSlideList,
  StyledSlideListWrapper,
} from './ProductSlideList.styles';

import Product from '../Product';
import { Grid } from '@material-ui/core';
import { getLatestProducts } from '../../apis/product';
import { IProduct } from '../../../../types/modelTypes';
import { isLogin, getCookie } from '../../util/common';

const ProductSlideList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchLatestData = async () => {
      const res = await getLatestProducts();
      setProducts(res.result);
    };
    fetchLatestData();
  }, []);

  const renderProduct = () => {
    if (products.length === 0) {
      const skeletonProducts = new Array(12).fill(0);
      return skeletonProducts.map((product, index) => (
        <Grid item xs={4} sm={3} key={'slide-list' + index}>
          <Product product={product} size={'medium'} />
        </Grid>
      ));
    }
    return (
      products &&
      products.map((product) => (
        <Grid item style={{ minWidth: '20vh' }} key={'slide-list' + product.id}>
          <Product product={product} size={'medium'} />
        </Grid>
      ))
    );
  };

  const checkUser = () => {
    return isLogin() ? getCookie('name') : '손';
  };
  return (
    <StyledSlideListWrapper>
      <StyledListTitle>{checkUser()}님을 위한 최신 상품</StyledListTitle>
      <StyledSlideList container spacing={2} wrap={'nowrap'}>
        {renderProduct()}
      </StyledSlideList>
    </StyledSlideListWrapper>
  );
};
export default ProductSlideList;
