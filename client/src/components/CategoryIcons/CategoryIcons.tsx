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

const CategoryIcons = () => {
  const categories = useCategoryState();
  const categoryClickHandler = (category: ICategory) => {
    history.push({
      pathname: '/category',
      state: { category },
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
        <div>{category.name}</div>
      </StyledCategoryIconsCol>
    ));
  return (
    <StyledCategoryIconsWrap>
      <StyledCategoryIconsRow>{categoryGrid()}</StyledCategoryIconsRow>
    </StyledCategoryIconsWrap>
  );
};

export default CategoryIcons;
