import styled from 'styled-components';
import { Grid, Checkbox } from '@material-ui/core';

const StyledProduct = styled(Grid)`
  width: 100%;
  background: white;
  font-size: 13px;
` as typeof Grid;

const ImageWrapper = styled.div`
  width: 100%;
  height: 28vh;
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  position: relative;
  div {
    position: absolute;
    padding: 0.6em 0.8em;
    top: 0.6rem;
    left: 0.6rem;
    background: #dd4470;
    font-weight: bold;
    color: white;
    border-radius: 12px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductTitle = styled.div`
  width: 100%;
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 1.1em;
`;

const ProductPrice = styled.div`
  width: 100%;
  font-size: 1.1em;
  span {
    text-decoration: line-through;
    margin-right: 4px;
    color: #999;
  }
`;

export { StyledProduct, ImageWrapper, ProductTitle, ProductPrice };
