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
import { ICategory, IProduct } from '../../../../types/modelTypes';
import { StyledSortList } from '../ProductSortList/ProductSortList.styles';
import CategoryList from './CategoryList';
import history from '../../history';

const debounce = (
  func: (entries: IntersectionObserverEntry[]) => void,
  delay: number
) => {
  let debounceTimer: number;
  return (entries: IntersectionObserverEntry[]) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(entries), delay);
  };
};

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

  const productClickHandler = (product: IProduct) => {
    history.push({
      pathname: '/detail',
      state: { product },
    });
  };

  const renderProduct = (products: IProduct[]) => {
    return products.map((product) => {
      return (
        <Grid
          item
          xs={6}
          sm={4}
          key={product.id}
          onClick={() => productClickHandler(product)}
        >
          <Product product={product} />
        </Grid>
      );
    });
  };

  const observer = useMemo(() => {
    const debounceDelay = 300;
    const options = {
      threshold: 0.7,
    };
    const observerHandler = (entries: IntersectionObserverEntry[]) => {
      let curProductList = null;
      if (entries.length === 2) curProductList = entries[1].target;
      else curProductList = entries[0].target;

      const curIdx = (curProductList as HTMLDivElement).dataset.order;
      setCurCategory(parseInt(curIdx!, 10));
    };
    return new IntersectionObserver(
      debounce(observerHandler, debounceDelay),
      options
    );
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
          data-order={i}
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