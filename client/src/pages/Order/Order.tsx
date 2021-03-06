import React, { useState, useEffect } from 'react';
import SubTitle from '../../components/SubTitle';
import OrderList from '../../components/OrderList';
import { getOrders } from '../../apis/order';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Container } from '@material-ui/core';

const Order = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrder = async () => {
      const newOrders = await getOrders();
      setOrders(newOrders.orders);
    };
    fetchOrder();
  }, []);

  const renderOrderList = () => {
    return orders
      .map((order, i) => {
        return <OrderList order={order} key={'orderList' + i} />;
      })
      .reverse();
  };

  return (
    <Container maxWidth="md">
      <SubTitle text={'주문 내역'} icon={<ListAltIcon />}></SubTitle>
      {renderOrderList()}
    </Container>
  );
};

export default Order;
