import styled from 'styled-components';
import { Divider, Checkbox } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

interface DetailPageType {
  src?: string;
  open?: boolean;
}

export const StyledFormatQuoteIcon = styled(FormatQuoteIcon)`
  margin-left: 8px;
`;

export const StyledLeftformatQueteIcon = styled(FormatQuoteIcon)`
  margin-right: 8px;
  transform: rotateY(180deg);
`;

export const StyledDetialWrapper = styled.div`
  width: 86vw;
  margin: 0 auto;
  min-height: calc(100vh - 60px);
`;

export const StyledImage = styled.div`
  padding: 16px;
  margin: 16px 0;
  height: 50vh;
  position: relative;
  background-image: url('${(props: DetailPageType) => props.src}');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledCardButtonWrapper = styled.div`
  width: 86vw;
  padding: 8px 0 20px;
  position: fixed;
  bottom: 0;
  background: white;
`;

export const StyledCartButton = styled.div`
  width: 100%;
  border-radius: 16px;
  background: #dd4470;
  height: 6vh;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 6vh;
  text-align: center;
`;

export const StyledNameText = styled.div`
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

export const StyledPriceText = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
  span {
    margin-right: 8px;
    color: #dd4470;
  }
`;

export const StyledPriceDiscount = styled.span`
  font-size: 1rem;
  text-decoration: line-through;
  font-weight: 400;
  color: #777 !important;
`;

export const InfoContent = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 0;
  line-height: 16px;
  div {
    font-size: 0.9rem;
    line-height: 0.9rem;
    padding: 4px;
    margin-top: 2px;
  }
`;

export const InfoTitle = styled.div`
  width: 66px;
  margin-top: 0 !important;
  font-size: 1.1rem;
  margin-right: 0.8rem;
  background: #dd4470;
  padding: 8px !important;
  text-align: center;
  color: white;
  border-radius: 12px;
`;

export const MainImage = styled.img`
  width: 100%;
  margin-bottom: 6rem;
`;

export const Description = styled.div`
  font-size: 1rem;
  line-height: 1.4rem;
  color: #777;
  margin-bottom: 2rem;
`;

export const StyledDivider = styled(Divider)`
  margin: 2rem 0 !important;
`;

export const StyledFavoriteCheck = styled(Checkbox)`
  && {
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    margin: 0;
    svg {
      width: 10vw !important;
      height: 10vw !important;
    }
  }
` as typeof Checkbox;
