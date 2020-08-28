import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Container } from '@material-ui/core';

export const StyledCartButton = styled.button`
  width: 100%;
  border-radius: 3vh;
  background: ${(props) => props.theme.colors.main};
  bottom: 1vh;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 6vh;
  text-align: center;
`;

export const StyledCartWrapper = styled(Container)`
  width: 100%;
  padding-bottom: 9vh;
`;

export const StyledCartButtonWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  height: 9vh;
  bottom: 0;
  padding: 0 3vh;
  left: 0;
  box-sizing: border-box;
`;

export const StyledCartHeader = styled.div`
  display: flex;
  padding: 3vh 0 0 1vh;
  div {
    display: flex;
    align-items: center;
    h2 {
      font-weight: bold;
      display: inline-block;
      height: 3vh;
      line-height: 3vh;
    }
  }
`;

export const StyledCartIconWrapper = styled.div`
  height: 5vh !important;
  width: 5vh !important;
  background: ${(props) => props.theme.colors.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2vh;
`;

export const StyledCartIcon = styled(ShoppingCartIcon)`
  height: 3vh !important;
  width: 3vh !important;
  color: white;
`;

export const CartTitle = styled.div`
  display: flex;
  padding: 16px 0 0;
  height: 8vw;
  span {
    line-height: 8vw;
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

export const IconWrapper = styled.div`
  width: 8vw;
  height: 100%;
  background: ${(props) => props.theme.colors.main};
  border-radius: 20px;
  svg {
    margin: 15%;
    width: 70%;
    height: 70%;
    color: white;
  }
`;
