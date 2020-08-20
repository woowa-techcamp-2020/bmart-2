import React, { useEffect, useRef } from 'react';
import { useCategoryState } from '../../context/categoryContext';
import {
  StyledCategoryListWrap,
  StyledCategoryWrap,
} from './MainProductList.styles';
import { StyledSlideList } from '../ProductSlideList/ProductSlideList.styles';

interface ICategoryList {
  curCategory: number;
}

const CategoryList = ({ curCategory }: ICategoryList) => {
  const categories = useCategoryState();
  const categoryListWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const basePos = categoryListWrapRef.current!.offsetTop;
      console.log(window.pageYOffset > basePos);
    });
  }, []);
  const categoryList = () =>
    categories.map((category, i) => (
      <StyledCategoryWrap item key={category.id} selected={i === curCategory}>
        <div>{category.name}</div>
      </StyledCategoryWrap>
    ));

  return (
    <StyledSlideList
      container
      spacing={2}
      wrap="nowrap"
      ref={categoryListWrapRef}
    >
      {categoryList()}
    </StyledSlideList>
  );
};

export default CategoryList;
