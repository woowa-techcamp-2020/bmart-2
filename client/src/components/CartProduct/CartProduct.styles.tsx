import styled, { keyframes, css } from 'styled-components';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface SelectListType {
  url?: string;
  imageWidth?: number;
  clickbtn?: string;
  open?: boolean;
  count?: number;
}

export const StyledProductWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2vh 3vh;
`;

export const StyledProductContent = styled.div`
  width: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  padding: 2vh;
  box-sizing: border-box;
  border-radius: 3vh;
  display: flex;
`;

export const StyledProductCountWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const StyledProductInfoWrapper = styled.div`
  flex: 1;
  color: #444444;
  margin-bottom: 1vh;

  div {
    display: flex;
    h4 {
      font-weight: normal;
      flex: 1;
    }
    button {
      color: #777777;
    }
  }
`;

export const StyledProductPurchaseWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledProductImgWrapper = styled.div`
  margin-right: 2vh;
`;

export const StyledProductImg = styled.img`
  width: 10vh;
  height: 10vh;
  border-radius: 3vh;
  object-fit: cover;
`;

export const StyledPurchaseWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledCountUp = styled(AddIcon)`
  font-weight: bold;
  font-size: 2vw;
  border-radius: 50%;
  height: 4vh !important;
  width: 4vh !important;
  color: white;
  background: #dd4470;
  padding: 4px;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.shadow};
  transition: transform 0.4s;
  &:active {
    transform: scale(0.95);
  }
  ${(props: SelectListType) =>
    props.count &&
    props.count === 10 &&
    css`
      pointer-events: none;
      background: #ccc;
    `}
`;

export const StyledCountText = styled.span`
  line-height: 4vh;
  font-size: 2vh;
  font-weight: bold;
  margin: 0 10px;
  width: 2vh;
  text-align: center;
`;

export const StyledTotalPrice = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #dd4470;
`;

export const StyledCountDown = styled(RemoveIcon)`
  font-weight: bold;
  font-size: 2vh;
  border-radius: 50%;
  height: 4vh !important;
  width: 4vh !important;
  background: white;
  color: #dd4470;
  padding: 4px;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.shadow};
  transition: transform 0.4s;
  &:active {
    transform: scale(0.95);
  }
  ${(props: SelectListType) =>
    props.count &&
    props.count === 1 &&
    css`
      pointer-events: none;
      color: #ccc;
    `}
`;
