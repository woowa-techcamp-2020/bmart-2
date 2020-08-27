import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import apis from '../../apis';
import {
  StyledGridContainer,
  StyledMainTitle,
  StyledProductListWrap,
  StyledProductTitle,
  StyledTitleWrap,
} from './MainProductList.styles';

import Product from '../Product';
import { ICategory, IProduct } from '../../../../types/modelTypes';
import { StyledSortList } from '../ProductSortList/ProductSortList.styles';
import CategoryList from './CategoryList';
import history from '../../history';

interface IMainProductList {
  productsInCategories: ICategory[];
}

const MainProductList = ({ productsInCategories }: IMainProductList) => {
  const [curCategory, setCurCategory] = useState(0);

  const productListRefs = useRef<HTMLDivElement[]>([]);

  const observer = useMemo(() => {
    const options = {
      threshold: 0.6,
    };
    const observerHandler = (entries: IntersectionObserverEntry[]) => {
      let curProductList = null;
      if (entries.length === 2) curProductList = entries[1].target;
      else curProductList = entries[0].target;

      const curIdx = (curProductList as HTMLDivElement).dataset.order;
      setCurCategory(parseInt(curIdx!, 10));
    };
    return new IntersectionObserver(observerHandler, options);
  }, []);

  useEffect(() => {
    productListRefs.current.map((productList) => observer.observe(productList));
  }, [productsInCategories.length, observer]);

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

  const productList = () =>
    productsInCategories.map((productsInCategory, i) => {
      return (
        <StyledProductListWrap
          key={productsInCategory.id}
          ref={(e) => {
            productListRefs.current[i] = e!;
          }}
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
      <CategoryList
        curCategory={curCategory}
        productListRefs={productListRefs}
      />
      <StyledGridContainer>{productList()}</StyledGridContainer>
    </div>
  );
};

export default MainProductList;
