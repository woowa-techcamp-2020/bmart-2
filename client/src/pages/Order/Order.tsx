import React from 'react';
import SubTitle from '../../components/SubTitle';
import OrderList from '../../components/OrderList';
import {} from './Order.styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Container } from '@material-ui/core';

const Order = () => {
  const renderOrderList = () => {};
  return (
    <Container maxWidth="md">
      <SubTitle text={'주문 내역'} icon={<ListAltIcon />}></SubTitle>
      <OrderList></OrderList>
    </Container>
  );
};

export default Order;
