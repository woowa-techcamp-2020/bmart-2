import React from 'react';
import {
  StyledSummaryWrapper,
  StyledSummaryContent,
  StyledSummaryInfo,
} from './CartSummary.styles';
import { numberToString } from '../../util/common';

interface CartSummary {
  totalPrice: number;
}
const CartSummary = ({ totalPrice }: CartSummary) => {
  return (
    <StyledSummaryWrapper>
      <StyledSummaryContent>
        <StyledSummaryInfo>
          <h4>총 주문 금액</h4>
          <span>{numberToString(totalPrice)} 원</span>
        </StyledSummaryInfo>
        <StyledSummaryInfo>
          <h4>배달 팁</h4>
          <span>0 원</span>
        </StyledSummaryInfo>
      </StyledSummaryContent>
    </StyledSummaryWrapper>
  );
}

export default CartSummary;