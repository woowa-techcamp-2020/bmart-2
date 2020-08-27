import React from 'react';
import { OrderListWrapper, OrderProduct } from './OrderList.styles';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const url = 'https://img-cf.kurly.com/shop/data/goods/1463997072538l0.jpg';

const OrderList = () => {
  const renderProducts = () => {
    return (
      <OrderProduct>
        <img src={url}></img>
        <div>
          <span>당근당근당근!</span>
          <div>
            1,000원 x 27개 <span>27,000원</span>
          </div>
        </div>
      </OrderProduct>
    );
  };

  return (
    <OrderListWrapper>
      <p>
        <DoneOutlineIcon />
        배송 완료
      </p>
      <span> 8월 20일 6시 10분 주문</span>
      {renderProducts()}
      {renderProducts()}
    </OrderListWrapper>
  );
};

export default OrderList;
