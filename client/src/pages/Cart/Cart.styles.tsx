import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const StyledCartButton = styled.button`
  width: 100%;
  border-radius: 3vh;
  background: #dd4470;
  bottom: 1vh;
  height: 8vh;
  color: white;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

export const StyledCartWrapper = styled.div`
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
  background: #dd4470;
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
