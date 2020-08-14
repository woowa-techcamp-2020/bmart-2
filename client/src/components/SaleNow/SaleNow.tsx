import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { title } from 'process';
import { StyledProduct, ListImage, SelectedImage, ProductTitle, ProductPrice, SelectedProductWrap } from './SaleNow.styles';

type Product = {
  title: string;
  url: string;
  price: number;
};

const SaleNow = () => {
  const [products, setProducts] = useState<Product[]>([
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

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    if(products[0]){
      setSelectedProduct(products[0]);
    }
  }, [])

  const onSelectProduct = (product:Product) => {
    setSelectedProduct(product);
  }

  const productsList = () => products.map((product) => {
    return (
      <Grid item xs={3} key={uuidv4()}>
          <ListImage
            alt={product.title}
            src={product.url}
            onClick={() => onSelectProduct(product)}
            selected={product == selectedProduct}
          />
      </Grid>
    );
  });

  return (
    <div>
      <Grid container spacing={1}>
        {productsList()}
        <Grid item xs={12}>
          { selectedProduct ? (
            <StyledProduct>
              <SelectedImage
                  alt={'asdf'}
                  src={selectedProduct.url}
              />
              <ProductTitle> {selectedProduct.title} </ProductTitle>
              <ProductPrice> {selectedProduct.price}원</ProductPrice>
            </StyledProduct>
            )
            :
            (
            <img />
            )
          }
        </Grid>
      </Grid>

    </div>
  );
};

export default SaleNow;
