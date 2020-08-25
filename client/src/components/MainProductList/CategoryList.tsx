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
  const curCategoryRef = useRef<HTMLDivElement>(null);
  const categorySlideListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categories.length === 0) return () => null;
    const basePos = categoryListWrapRef.current!.offsetTop;
    const handleScroll = () => {
      if (window.pageYOffset > basePos) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [categories]);

  useEffect(() => {
    const widthOfScroll = 70;
    if (categorySlideListRef.current) {
      if (curCategory === 0) {
        categorySlideListRef.current.scrollLeft = 0;
      } else {
        categorySlideListRef.current.scrollLeft = curCategory * widthOfScroll;
      }
    }
  }, [curCategory]);

  const categoryList = () =>
    categories.map((category, i) => {
      const selected = i === curCategory;
      return (
        <StyledCategoryWrap
          item
          key={category.id}
          selected={selected}
          ref={selected ? curCategoryRef : null}
        >
          <div>{category.name}</div>
        </StyledCategoryWrap>
      );
    });

  return (
    <StyledCategoryListWrap
      style={{ position: isTop ? 'fixed' : 'static' }}
      ref={categoryListWrapRef}
    >
      <StyledSlideList
        container
        spacing={2}
        wrap="nowrap"
        ref={categorySlideListRef}
      >
        {categoryList()}
      </StyledSlideList>
    </StyledCategoryListWrap>
  );
};

export default CategoryList;