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

export const StyledCountDown = styled(RemoveIcon)`
  font-weight: bold;
  font-size: 16px;
  border-radius: 50%;
  height: 32px !important;
  width: 32px !important;
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

export const StyledCountText = styled.div`
  line-height: 32px;
  font-size: 17px;
  font-weight: bold;
  margin: 0 10px;
  width: 20px;
  text-align: center;
`;

export const StyledCountUp = styled(AddIcon)`
  font-weight: bold;
  font-size: 18px;
  border-radius: 50%;
  height: 32px !important;
  width: 32px !important;
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
function goCartImage(height: number | undefined) {
  return keyframes`
  0% {
    padding: 0;
    border-radius: 0;
  }
  20% {
    padding: 0;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    transform: translate3d(0, 0, 0);
  }
  30% {
    padding: 0;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    transform: translate3d(0, 0, 0);
  }
  40% {
    padding: 0;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    transform: translate3d(0, 0, 0);
  }
  40% {
    padding: 0;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    transform: translate3d(0, -10px, 0);
  }

  75% {
    padding: 0;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    transform: translate3d(0, ${height ? height : 0}px, 0);
    opacity: 1;
  }
  76% {
    width: 0px;
    height: 0px;
    padding: 0;
  }

  100% {
    width: 0px;
    height: 0px;
    padding: 0;
  }
`;
}

const goCartbutton = keyframes`
  75% {
    transform: translate3d(0, 0, 0);
  }
  83% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 0px, 0);
  }
  100% {
    transform: translate3d(0, 100px, 0);
  }
`;

const cancelContainer = keyframes`
  80% {
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledSelectListContaienr = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column-reverse;
  transition: all 0.4s;
  ${(props: SelectListType) =>
    props.open &&
    css`
      z-index: 2;
      opacity: 1;
    `}
  ${(props: SelectListType) =>
    props.clickbtn === 'true' &&
    css`
      animation: ${cancelContainer} 1.4s forwards;
    `}
`;
export const StyledSelectListWrapper = styled.div`
  height: 320px;
`;

export const StyledSelectList = styled.div`
  margin: 0 auto;
  height: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: white;
  padding: 32px;
  transform: translate3d(0, 320px, 0);
  transition: all 0.4s;
  ${(props: SelectListType) =>
    props.open &&
    css`
      transform: translate3d(0, 0, 0);
    `}
  ${(props: SelectListType) =>
    props.clickbtn === 'true' &&
    css`
      animation: ${goCartImage(230)} 1.4s forwards;
    `}
  overflow: hidden;
`;

export const StyledImageContentWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

export const StyledImageContent = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 40px;
  background-image: url('${(props: SelectListType) => props.url}'); 
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledProductName = styled.div`
  width: 100%;
  padding: 12px 0 4px;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledProductMaxCount = styled.div`
  width: 100%;
  font-size: 14px;
  padding-bottom: 12px;
`;

export const StyledSelectProductCartContent = styled.div`
  display: flex;
  height: 32px;
`;

export const StyledProductPrice = styled.div`
  flex: 1;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  line-height: 32px;
`;

export const StyledProductCountWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const StyledSelectListButtonWrapper = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 22px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const StyledSelectListButton = styled(ShoppingCartIcon)`
  width: 60px !important;
  height: 100% !important;
  background: #dd4470;
  border-radius: 50%;
  transform: translate3d(0, 100px, 0);
  transition: all 0.4s;
  padding: 16px;
  color: white;
  box-sizing: border-box;
  ${(props: SelectListType) =>
    props.open &&
    css`
      transform: translate3d(0, 0, 0);
    `}

  ${(props: SelectListType) =>
    props.clickbtn === 'true' &&
    css`
      animation: ${goCartbutton} 1.4s forwards;
    `}
`;
