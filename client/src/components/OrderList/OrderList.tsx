import React from 'react';
import {
  OrderListWrapper,
  OrderProduct,
  StyledSummaryInfo,
} from './OrderList.styles';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { IOrder } from '../../../../types/modelTypes';
import { numberToString, dateToString } from '../../util/common';

const OrderList = ({ order }: { order: IOrder[] }) => {
  const renderProducts = () => {
    return order.map((productInOrder: IOrder, i: number) => {
      const { product } = productInOrder;
      return (
        <OrderProduct key={'orderProduct' + i}>
          <img src={product.thumbImgUrl}></img>
          <div>
            <span>{product.name}</span>
            <div>
              {numberToString(product.price)}원 x {productInOrder.count}개{' '}
              <span>
                {numberToString(product.price * productInOrder.count)}
              </span>
            </div>
          </div>
        </OrderProduct>
      );
    });
  };

  const getTotalPrice = (): number => {
    return order.reduce(
      (acc: number, productInOrder: IOrder): number =>
        acc + productInOrder.product.price * productInOrder.count,
      0
    );
  };
  return (
    <OrderListWrapper>
      <p>
        <DoneOutlineIcon />
        배송 완료
      </p>
      <span>{dateToString(order[0].lastUpdated)} 주문</span>
      {renderProducts()}
      <StyledSummaryInfo>
        <h4>총 주문 금액</h4>
        <span>{numberToString(getTotalPrice())}원</span>
      </StyledSummaryInfo>
    </OrderListWrapper>
  );
};

export default OrderList;
