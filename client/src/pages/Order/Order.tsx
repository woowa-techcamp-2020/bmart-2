import React from 'react';
import SubTitle from '../../components/SubTitle';
import OrderList from '../../components/OrderList';
import {} from './Order.styles';
import ListAltIcon from '@material-ui/icons/ListAlt';

const Order = () => {
  const renderOrderList = () => {};
  return (
    <>
      <SubTitle text={'주문 내역'} icon={<ListAltIcon />}></SubTitle>
      <OrderList></OrderList>
    </>
  );
};

export default Order;
