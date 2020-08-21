import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import apis from '../../apis';
import {
  StyledGridContainer,
  StyledMainTitle,
  StyledProductListWrap,
  StyledProductTitle,
  StyledTitleWrap,
} from './MainProductList.styles';

import Product from './Product';
import { useCategoryState } from '../../context/categoryContext';
import { ICategory, IProduct } from '../../../../types/modelTypes';
import { StyledSortList } from '../ProductSortList/ProductSortList.styles';
import CategoryList from './CategoryList';

const MainProductList = () => {
  const [curCategory, setCurCategory] = useState(0);
  const [productsInCategories, setProductsInCategories] = useState<ICategory[]>(
    []
  );
  useEffect(() => {
    const getProductByCategory = async () => {
      const res = await apis.get('/category?product=true');
      setProductsInCategories(res.data);
    };
    getProductByCategory();
  }, []);

  const renderProduct = (products: IProduct[]) => {
    return products.map((product) => {
      return (
        <Grid item xs={6} sm={4} key={product.id}>
          <Product product={product} />
        </Grid>
      );
    });
  };

  const observer = useMemo(() => {
    let productLists: Element[] = [];
    const options = {
      threshold: 0.6,
    };
    return new IntersectionObserver((entries) => {
      if (entries.length > 1) {
        productLists = entries.map((entry) => entry.target);
      } else if (entries.length === 1) {
        const curProductList = entries[0].target;
        const curIdx = productLists.findIndex(
          (productList) => productList === curProductList
        );
        setCurCategory(curIdx);
      }
    }, options);
  }, []);

  const addObserverToProductList = (element: HTMLDivElement) => {
    if (element) observer.observe(element);
  };

  const productList = () =>
    productsInCategories.map((productsInCategory, i) => {
      return (
        <StyledProductListWrap
          key={productsInCategory.id}
          ref={addObserverToProductList}
        >
          <StyledProductTitle>{productsInCategory.name}</StyledProductTitle>
          <StyledSortList container spacing={2}>
            {renderProduct(productsInCategory.Products as IProduct[])}
          </StyledSortList>
        </StyledProductListWrap>
      );
    });

  return (
    <div>
      <StyledTitleWrap>
        <StyledMainTitle>번쩍하면 배달오는</StyledMainTitle>
        B마트 대표 상품
      </StyledTitleWrap>
      <CategoryList curCategory={curCategory} />
      <StyledGridContainer>{productList()}</StyledGridContainer>
    </div>
  );
};

export default MainProductList;
