import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  MenuPageButtonWrapper,
  MenuCaegoryWrapper,
  MenuCategory,
  MenuPageButton,
} from './Menu.styles';

import { useCategoryState } from '../../context/categoryContext';
import history from '../../history';
import { ICategory } from '../../../../types/modelTypes';

import { login, logout } from '../../apis/auth';
import { getCookie } from '../../util/common';

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
        <img src={category.imgUrl} alt={category.name} />
        <div>{category.name}</div>
      </MenuCategory>
    ));
  };

  const name = getCookie('name');

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
        <MenuPageButton onClick={() => (name ? logout() : login())}>
          <ExitToAppIcon />
          {name ? <span>로그아웃</span> : <span>로그인</span>}
        </MenuPageButton>
      </MenuPageButtonWrapper>
      <MenuCaegoryWrapper>{renderCategories()}</MenuCaegoryWrapper>
    </>
  );
};

export default Menu;
