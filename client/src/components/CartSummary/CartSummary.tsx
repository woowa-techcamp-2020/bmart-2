import React from 'react';
import {
  StyledSummaryWrapper,
  StyledSummaryContent,
  StyledSummaryInfo,
} from './CartSummary.styles';

export default function CartSummary() {
  return (
    <StyledSummaryWrapper>
      <StyledSummaryContent>
        <StyledSummaryInfo>
          <h4>총 주문 금액</h4>
          <span>3000</span>
        </StyledSummaryInfo>
        <StyledSummaryInfo>
          <h4>배달 팁</h4>
          <span>0</span>
        </StyledSummaryInfo>
      </StyledSummaryContent>
    </StyledSummaryWrapper>
  );
}
