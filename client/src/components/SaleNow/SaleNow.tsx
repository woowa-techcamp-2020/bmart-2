import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import {
  StyledProduct,
  ListImage,
  SelectedImage,
  ProductTitle,
  ProductPrice,
  SaleText,
} from './SaleNow.styles';

type Product = {
  title: string;
  url: string;
  price: number;
};

const SaleNow = () => {
  const [products] = useState<Product[]>([
    {
      title: '[KF365] 햇 감자 1kg',
      url: 'https://img-cf.kurly.com/shop/data/goods/1530172373295l0.jpg',
      price: 2200,
    },
    {
      title: '한끼 당근 1개',
      url: 'https://img-cf.kurly.com/shop/data/goods/1583285919646l0.jpg',
      price: 2200,
    },
    {
      title: 'GAP 오이 2입',
      url: 'https://img-cf.kurly.com/shop/data/goods/1531993158257l0.jpg',
      price: 3100,
    },
    {
      title: '친환경 당근 500g',
      url: 'https://img-cf.kurly.com/shop/data/goods/1463997072538l0.jpg',
      price: 2700,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (products[0]) {
      setSelectedProduct(products[0]);
    }
  }, [products]);

  const onSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const productsList = () =>
    products.map((product, i) => {
      return (
        <Grid item xs={3} key={`sale-now-${i}}`}>
          <ListImage
            alt={product.title}
            src={product.url}
            onClick={() => onSelectProduct(product)}
            selected={product === selectedProduct}
          />
        </Grid>
      );
    });

  return (
    <div>
      <SaleText>
        지금사면
        <span role="img" aria-label="thunder">
          ⚡
        </span>
        <span>번쩍 할인</span>
      </SaleText>
      <Grid container spacing={1}>
        {productsList()}
        <Grid item xs={12}>
          {selectedProduct ? (
            <StyledProduct>
              <SelectedImage alt="asdf" src={selectedProduct.url} />
              <ProductTitle> {selectedProduct.title} </ProductTitle>
              <ProductPrice> {selectedProduct.price}원</ProductPrice>
            </StyledProduct>
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default SaleNow;
