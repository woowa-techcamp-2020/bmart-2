import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const StyledProduct = styled(Grid)`
  box-shadow: ${(props) => props.theme.shadow};
  padding: 14px !important;
  border-radius: 12px;
  background: white;
  font-size: 13px;
` as typeof Grid;

const ImageWrapper = styled.div`
  width: 100%;
  min-height: 80px;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 4px;
`;

const ProductTitle = styled.div`
  width: 100%;
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 13px;
`;

const ProductPrice = styled.div`
  width: 100%;
  color: #777;
  font-size: 13px;
`;

const StyledProductWrapper = styled.div`
  min-width: 40%;
`;

export { StyledProduct, ImageWrapper, ProductTitle, ProductPrice };
