import styled from 'styled-components';
import { Grid, Checkbox } from '@material-ui/core';

const StyledProduct = styled(Grid)`
  width: 100%;
  background: white;
  font-size: 13px;
` as typeof Grid;

const ImageWrapper = styled.div`
  width: 100%;
  min-height: 80px;
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  position: relative;
`;

const ProductTitle = styled.div`
  width: 100%;
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 1.1em;
`;

const ProductPrice = styled.div`
  width: 100%;
  color: #777;
  font-size: 1.05em;
`;

const StyledFavoriteCheck = styled(Checkbox)`
  && {
    position: absolute;
    bottom: 4px;
    right: 4px;
    transform: scale(1.1);
    margin: 0;
  }
` as typeof Checkbox;

export {
  StyledProduct,
  ImageWrapper,
  ProductTitle,
  ProductPrice,
  StyledFavoriteCheck,
};
