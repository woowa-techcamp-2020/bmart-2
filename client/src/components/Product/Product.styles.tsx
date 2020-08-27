import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { backgroundUrlImage, TImageUrl } from '../../shared/style.styles';

const StyledProduct = styled(Grid)`
  width: 100%;
  background: white;
  font-size: 13px;
  padding: 1vw 0;
` as typeof Grid;

const ImageWrapper = styled.div`
  width: 100%;
  height: 28vh;
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  position: relative;
  ${(props: TImageUrl) => backgroundUrlImage(props.url)};
  div {
    position: absolute;
    padding: 0.6rem 0.8rem;
    top: 0.6rem;
    left: 0.6rem;
    background: ${(props) => props.theme.colors.main};
    font-weight: bold;
    color: white;
    font-size: 1rem;
    border-radius: 12px;
  }
`;

const ProductTitle = styled.div`
  width: 100%;
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 0.95rem;
  text-align: left;
  color: #555;
`;

const ProductPrice = styled.div`
  width: 100%;
  font-size: 1.02rem;
  text-align: left;
  font-weight: 600;
  span {
    font-size: 0.95rem;
    text-decoration: line-through;
    margin-right: 4px;
    font-weight: 400;
    color: #999;
  }
`;

export { StyledProduct, ImageWrapper, ProductTitle, ProductPrice };
