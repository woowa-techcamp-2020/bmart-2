import React, { useEffect } from 'react';
import { DibTitle, IconWrapper, DibCount, DibItem } from './Dib.styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Product from '../../components/Product';

import { Grid } from '@material-ui/core';
import { useDibState } from '../../context/dibContext';
import { Container } from '@material-ui/core';

// TODO
// 최근 순으로 보여줘야함
const Dib = () => {
  const dibState = useDibState();
  const renderDibs = () => {
    return dibState.map((product) => (
      <Grid item xs={6} sm={4} key={'sort-list' + product.id}>
        <Product product={product} />
      </Grid>
    ));
  };
  return (
    <Container maxWidth="md">
      <DibTitle>
        <IconWrapper>
          <FavoriteBorderIcon />
        </IconWrapper>
        <span>찜하기</span>
      </DibTitle>
      <DibCount>찜한 갯수: {dibState.length}개</DibCount>
      <Grid container spacing={3}>
        {renderDibs()}
      </Grid>
    </Container>
  );
};

export default Dib;
