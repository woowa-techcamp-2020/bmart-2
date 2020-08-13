import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid'
type Product = {
  title: string,
  url: string,
  price: number
}[];

const SaleNow = () => {
  const [products, setProducts] = useState<Product>([
    {
      title: '[KF365] 햇 감자 1kg',
      url: 'https://img-cf.kurly.com/shop/data/goods/1530172373295l0.jpg',
      price: 2200
    },
    {
      title: '한끼 당근 1개',
      url: 'https://img-cf.kurly.com/shop/data/goods/1583285919646l0.jpg',
      price: 2200
    },
    {
      title: 'GAP 오이 2입',
      url: 'https://img-cf.kurly.com/shop/data/goods/1531993158257l0.jpg',
      price: 3100
    },
    {
      title: '친환경 당근 500g',
      url: 'https://img-cf.kurly.com/shop/data/goods/1463997072538l0.jpg',
      price: 2700
    }
  ])
  const gridSize = 3;

  const productsList = products.map((product) => {
    return (
      <Grid item xs={3} key={uuidv4()}>
        <img src={product.url} />
      </Grid>
    )
  })


  return (
    <Grid container spacing={1}>
      {productsList}
    </Grid>
  );
};

export default SaleNow;
