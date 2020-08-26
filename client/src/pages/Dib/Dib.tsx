import React, { useEffect } from 'react';
import { DibTitle, IconWrapper, DibCount, DibItem } from './Dib.styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Product from '../../components/Product';

import { Grid } from '@material-ui/core';
import categoryApi from '../../apis';
import { IProduct } from '../../../../types/modelTypes';

// TODO
// 최근 순으로 보여줘야함
const Dib = () => {
  const [products, setProducts] = React.useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const res = await categoryApi.get(`/product?categoryId=${1}`);
      setProducts(res.data.products);
    };
    fetchCategoryProducts();
  }, []);

  const renderDibs = () => {
    return (
      products &&
      products.map((product) => (
        <Grid item xs={6} sm={4} key={'sort-list' + product.id}>
          <Product product={product} />
        </Grid>
      ))
    );
  };
  return (
    <>
      <DibTitle>
        <IconWrapper>
          <FavoriteBorderIcon />
        </IconWrapper>
        <span>찜하기</span>
      </DibTitle>
      <DibCount>찜한 갯수: 0개</DibCount>
      <Grid container spacing={3}>
        {renderDibs()}
      </Grid>
    </>
  );
};

export default Dib;
