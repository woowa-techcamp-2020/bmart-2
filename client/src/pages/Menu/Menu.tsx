import React, { useState } from 'react';
import {
  MenuPageButtonWrapper,
  MenuCaegoryWrapper,
  MenuCategory,
  MenuPageButton,
  StyledSubCategory,
  SubcategoryWrapper,
} from './Menu.styles';

import { useCategoryState } from '../../context/categoryContext';
import history from '../../history';
import { ICategory } from '../../../../types/modelTypes';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const selectedAll = {
  id: 0,
  name: '전체보기',
};

const Menu = () => {
  const categories = useCategoryState();
  const [selected, setSelected] = useState(0);

  const pushHistory = (
    pathname: string,
    category?: ICategory,
    subCategoryId?: number
  ) => {
    history.push({
      pathname: `/${pathname}`,
      state: { category, subCategoryId },
    });
  };

  const renderSubCategories = (category: ICategory) => {
    if (!category.SubCategories) return;
    const subCategory = [selectedAll, ...category.SubCategories];
    return subCategory.map((subCategory) => (
      <StyledSubCategory
        item
        xs={6}
        sm={3}
        key={`sub-category-${subCategory.id}-by-${category.id}`}
        onClick={() => pushHistory('category', category, subCategory.id)}
      >
        {subCategory.name}
      </StyledSubCategory>
    ));
  };

  const renderCategories = () => {
    return categories.map((category) => (
      <MenuCaegoryWrapper key={`menu-category-${category.id}`}>
        <MenuCategory onClick={() => setSelected(category.id)}>
          <img src={category.imgUrl} alt={category.name}></img>
          <div>{category.name}</div>
        </MenuCategory>
        <SubcategoryWrapper container hidden={selected !== category.id}>
          {renderSubCategories(category)}
        </SubcategoryWrapper>
      </MenuCaegoryWrapper>
    ));
  };
  return (
    <>
      <MenuPageButtonWrapper>
        <MenuPageButton onClick={() => pushHistory('order')}>
          <ListAltIcon />
          <span>주문 내역</span>
        </MenuPageButton>
        <MenuPageButton onClick={() => pushHistory('dib')}>
          <FavoriteBorderIcon />
          <span>찜하기</span>
        </MenuPageButton>
        <MenuPageButton onClick={() => pushHistory('dib')}>
          <ExitToAppIcon />
          <span>로그아웃</span>
        </MenuPageButton>
      </MenuPageButtonWrapper>
      <MenuCaegoryWrapper>{renderCategories()}</MenuCaegoryWrapper>
    </>
  );
};

export default Menu;
