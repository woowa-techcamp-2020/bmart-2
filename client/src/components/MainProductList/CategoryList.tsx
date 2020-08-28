import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useCategoryState } from '../../context/categoryContext';
import {
  StyledCategoryListWrap,
  StyledCategoryWrap,
  StyledStickyWrap,
} from './MainProductList.styles';
import { StyledSlideList } from '../ProductSlideList/ProductSlideList.styles';

interface ICategoryListProps {
  curCategory: number;
  productListRefs: React.MutableRefObject<HTMLDivElement[]>;
}

const CategoryList = ({ curCategory, productListRefs }: ICategoryListProps) => {
  const categories = useCategoryState();
  const categoryListWrapRef = useRef<HTMLDivElement>(null);
  const curCategoryRef = useRef<HTMLDivElement>(null);
  const categorySlideListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const widthOfScroll = 100;
    if (categorySlideListRef.current) {
      if (curCategory === 0) {
        categorySlideListRef.current.scrollLeft = 0;
      } else {
        categorySlideListRef.current.scrollLeft = curCategory * widthOfScroll;
      }
    }
  }, [curCategory]);

  const categoryListHandler = (idx: number) => {
    if (idx >= productListRefs.current.length) return;
    const target = productListRefs.current[idx];
    const fixedSize = 50;
    const padding = 120 + (curCategory === 0 ? fixedSize : 0);
    window.scrollTo({
      top: target.offsetTop - padding,
      left: 0,
      behavior: 'smooth',
    });
  };

  const categoryList = () =>
    categories.map((category, i) => {
      const selected = i === curCategory;
      return (
        <StyledCategoryWrap
          item
          key={category.id}
          selected={selected}
          ref={selected ? curCategoryRef : null}
          onClick={() => categoryListHandler(i)}
        >
          <div>{category.name}</div>
        </StyledCategoryWrap>
      );
    });

  return (
    <StyledStickyWrap>
      <StyledCategoryListWrap ref={categoryListWrapRef}>
        <StyledSlideList
          container
          spacing={1}
          wrap="nowrap"
          ref={categorySlideListRef}
        >
          {categoryList()}
        </StyledSlideList>
      </StyledCategoryListWrap>
    </StyledStickyWrap>
  );
};

export default CategoryList;
