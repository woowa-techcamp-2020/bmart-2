import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const [isTop, setIsTop] = useState(false);

  const categories = useCategoryState();
  const categoryListWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categories.length === 0) return;
    const basePos = categoryListWrapRef.current!.offsetTop;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > basePos) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
  }, [categories]);

  const categoryList = () =>
    categories.map((category, i) => {
      return (
        <StyledCategoryWrap item key={category.id} selected={i === curCategory}>
          <div>{category.name}</div>
        </StyledCategoryWrap>
      );
    });

  return (
    <StyledCategoryListWrap
      style={{ position: isTop ? 'fixed' : 'static' }}
      ref={categoryListWrapRef}
    >
      <StyledSlideList container spacing={2} wrap="nowrap">
        {categoryList()}
      </StyledSlideList>
    </StyledCategoryListWrap>
  );
};

export default CategoryList;
