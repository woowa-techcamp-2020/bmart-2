import React, { useEffect, useMemo, useState } from 'react';
import { IProduct } from '../../../../types/modelTypes';
import history from '../../history';
import apis from '../../apis';
import ProductSortList from '../../components/ProductSortList';

import { Container } from '@material-ui/core';
const SearchResult = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const paramName = 'keyword';
    const params = new URLSearchParams(history.location.search);
    const param = params.get(paramName);

    const fetchSearchResult = async () => {
      if (param?.trim() === '') return;
      const res = await apis.get(`/search?keyword=${param}`);
      setProducts(res.data);
    };

    fetchSearchResult();
  }, [history.location.search]);

  return <Container maxWidth="md">
  <ProductSortList products={products} />
  </Container>;
};

export default SearchResult;
