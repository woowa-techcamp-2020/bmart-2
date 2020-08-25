import * as React from 'react';
import {
  StyledListWrapper,
  StyledSortList,
  StyledListTitle,
  StyledListTitleWrapper,
  SortIcon,
} from './ProductSortList.styles';
import Product from '../Product';

import { Grid } from '@material-ui/core';
import { IProduct } from '../../../../types/modelTypes';
import SelectSortList from '../../components/SelectSortList';

interface IProudctSortListProps {
  products: IProduct[] | null;
}

const sortType = [
  '기본 정렬순',
  '인기 상품순',
  '금액 높은순',
  '금액 낮은순',
  '신규 상품순',
  '할인율 순',
];

const ProductSortList = ({ products }: IProudctSortListProps) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const renderProduct = () => {
    if (!products) {
      products = new Array(12).fill(0);
    }
    return filterProduct(products).map((item: IProduct, index) => (
      <Grid item xs={6} sm={4} key={'sort-list' + index}>
        <Product product={item} />
      </Grid>
    ));
  };

  const filterProduct = (products: IProduct[]): IProduct[] => {
    switch (selected) {
      case 1:
        // 인기 상품
        return products.sort((a, b) => a.stock - b.stock);
      case 2:
        // 금액 높음
        return products.sort((a, b) => b.price - a.price);
      case 3:
        // 금액 낮음
        return products.sort((a, b) => a.price - b.price);
      case 4:
        // 신규 상품
        return products.sort((a, b) => a.id - b.id);
      case 5:
        // 할인율
        return products.sort((a, b) => b.discount - a.discount);
      default:
        return products;
    }
  };

  return (
    <>
      <StyledListWrapper>
        <StyledListTitleWrapper>
          <StyledListTitle onClick={() => setOpen(true)}>
            {sortType[selected]}
          </StyledListTitle>
        </StyledListTitleWrapper>
        <StyledSortList container spacing={3}>
          {renderProduct()}
        </StyledSortList>
      </StyledListWrapper>
      <SelectSortList
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
        sortType={sortType}
      ></SelectSortList>
    </>
  );
};

export default ProductSortList;
