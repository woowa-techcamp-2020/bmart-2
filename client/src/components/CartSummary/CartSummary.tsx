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

export default function CartSummary({ totalPrice }: CartSummary) {
  return (
    <StyledSummaryWrapper>
      <StyledSummaryContent>
        <StyledSummaryInfo>
          <h4>총 주문 금액</h4>
          <span>{numberToString(totalPrice)}</span>
        </StyledSummaryInfo>
        <StyledSummaryInfo>
          <h4>배달 팁</h4>
          <span>0</span>
        </StyledSummaryInfo>
      </StyledSummaryContent>
    </StyledSummaryWrapper>
  );
}
