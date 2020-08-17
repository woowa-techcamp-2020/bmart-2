import React from 'react';
import {
  StyledWrapper,
  StyledHourse,
  StyledCarousel,
  StyledThumb,
} from './Carousel.styles';
export default function Carousel() {
  return (
    <StyledWrapper>
      <StyledCarousel>
        <StyledHourse>
          <StyledThumb src="https://img-cf.kurly.com/shop/data/m/event/bc9b91586a619ffcfa8d7d5de83aae86.jpg" />
        </StyledHourse>
        <StyledHourse>
          <StyledThumb src="https://img-cf.kurly.com/shop/data/m/event/bc9b91586a619ffcfa8d7d5de83aae86.jpg" />
        </StyledHourse>
      </StyledCarousel>
    </StyledWrapper>
  );
}
