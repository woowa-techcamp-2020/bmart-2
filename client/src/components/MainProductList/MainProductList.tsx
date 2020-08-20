import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import apis from '../../apis';
import {
  StyledCategoryListWrap,
  StyledCategoryWrap,
  StyledMainTitle,
  StyledProductListWrap,
  StyledProductTitle,
  StyledTitleWrap,
} from './MainProductList.styles';
import {
  StyledSlideList,
  StyledSlideListWrapper,
} from '../ProductSlideList/ProductSlideList.styles';
import Product from './Product';
import { useCategoryState } from '../../context/categoryContext';
import { ICategory, IProduct } from '../../../../types/modelTypes';
import {
  StyledListWrapper,
  StyledSortList,
} from '../ProductSortList/ProductSortList.styles';
import CategoryList from './CategoryList';

const MainProductList = () => {
  const [curCategory, setCurCategory] = useState(0);
  const [productsInCategories, setProductsInCategories] = useState<ICategory[]>(
    []
  );
  const categories = useCategoryState();

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

  const productList = () =>
    productsInCategories.map((productsInCategory) => {
      return (
        <StyledProductListWrap key={productsInCategory.id}>
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
      <StyledCategoryListWrap>
        <CategoryList curCategory={curCategory} />
        {productList()}
      </StyledCategoryListWrap>
    </div>
  );
};

export default MainProductList;
