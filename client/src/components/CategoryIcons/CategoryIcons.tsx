import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import {
  StyledCategoryIconsCol,
  StyledCategoryIconsRow,
  StyledCategoryIconsWrap,
} from './CategoryIcons.styles';
import { useCategoryState } from '../../context/categoryContext';
import history from '../../history';
import { ICategory } from '../../../../types/modelTypes';
import { usePageDispatch } from '../../context/pageContext';

const CategoryIcons = () => {
  const categories = useCategoryState();
  const pageDispatch = usePageDispatch();
  const categoryClickHandler = (category: ICategory) => {
    history.push({
      pathname: '/category',
      state: { category, subCategoryId: 0 },
    });
    pageDispatch!({
      type: 'PATHNAME_CHANGE',
      pathname: history.location.pathname,
    });
  };
  const categoryGrid = () =>
    categories.map((category) => (
      <StyledCategoryIconsCol
        key={category.id}
        onClick={() => categoryClickHandler(category)}
      >
        <div>
          <img src={category.imgUrl} alt="category img" />
        </div>
        <p>{category.name}</p>
      </StyledCategoryIconsCol>
    ));
  return (
    <StyledCategoryIconsWrap>
      <StyledCategoryIconsRow>{categoryGrid()}</StyledCategoryIconsRow>
    </StyledCategoryIconsWrap>
  );
};

export default CategoryIcons;
