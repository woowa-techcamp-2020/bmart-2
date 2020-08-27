import React from 'react';
import {
  MenuPageButtonWrapper,
  MenuCaegoryWrapper,
  MenuCategory,
  MenuPageButton,
} from './Menu.styles';

import { useCategoryState } from '../../context/categoryContext';
import history from '../../history';
import { ICategory } from '../../../../types/modelTypes';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Menu = () => {
  const categories = useCategoryState();

  const pushHistory = (pathname: string, category?: ICategory) => {
    history.push({
      pathname: `/${pathname}`,
      state: { category },
    });
  };

  const renderCategories = () => {
    return categories.map((category) => (
      <MenuCategory
        key={`menu-category-${category.id}`}
        onClick={() => pushHistory('category', category)}
      >
        <img src={category.imgUrl} alt={category.name}></img>
        <div>{category.name}</div>
      </MenuCategory>
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
