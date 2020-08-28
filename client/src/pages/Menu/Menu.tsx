import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React, { useState } from 'react';
import { Container } from '@material-ui/core';
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
import { usePageDispatch, openNotification } from '../../context/pageContext';
import { login, logout } from '../../apis/auth';
import { getCookie } from '../../util/common';

const selectedAll = {
  id: 0,
  name: '전체보기',
};
const Menu = () => {
  const categories = useCategoryState();
  const [selected, setSelected] = useState(0);
  const pageDispatch = usePageDispatch();

  const pushHistory = (
    pathname: string,
    category?: ICategory,
    subCategoryId?: number
  ) => {
    history.push({
      pathname: `/${pathname}`,
      state: { category, subCategoryId },
    });
    pageDispatch!({
      type: 'PATHNAME_CHANGE',
      pathname: history.location.pathname,
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
          <img src={category.imgUrl} alt={category.name} />
          <div>{category.name}</div>
        </MenuCategory>
        <SubcategoryWrapper container hidden={selected !== category.id}>
          {renderSubCategories(category)}
        </SubcategoryWrapper>
      </MenuCaegoryWrapper>
    ));
  };

  const name = getCookie('name');

  return (
    <Container maxWidth="md">
      <MenuPageButtonWrapper>
        <MenuPageButton onClick={() => pushHistory('order')}>
          <ListAltIcon />
          <span>주문 내역</span>
        </MenuPageButton>
        <MenuPageButton onClick={() => pushHistory('dib')}>
          <FavoriteBorderIcon />
          <span>찜하기</span>
        </MenuPageButton>
        <MenuPageButton
          onClick={async () => {
            if (name) {
              await logout();
              openNotification(pageDispatch, '로그아웃 완료!');
            } else {
              await login();
            }
          }}
        >
          <ExitToAppIcon />
          {name ? <span>로그아웃</span> : <span>로그인</span>}
        </MenuPageButton>
      </MenuPageButtonWrapper>
      <MenuCaegoryWrapper>{renderCategories()}</MenuCaegoryWrapper>
    </Container>
  );
};

export default Menu;
