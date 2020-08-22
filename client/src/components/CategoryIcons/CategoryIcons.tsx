import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import {
  StyledCategoryIconsCol,
  StyledCategoryIconsRow,
  StyledCategoryIconsWrap,
} from './CategoryIcons.styles';
import { useCategoryState } from '../../context/categoryContext';

const CategoryIcons = () => {
  const categories = useCategoryState();
  const categoryGrid = () =>
    categories.map((category) => (
      <StyledCategoryIconsCol key={category.id}>
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
