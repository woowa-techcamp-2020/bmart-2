import styled from 'styled-components';
import { Grid } from '@material-ui/core';

type TListImage = {
  selected: boolean;
};

export const StyledProduct = styled(Grid)`
  box-shadow: ${(props) => props.theme.shadow};
  padding: 5px !important;
  border-radius: 12px;
  background: white;
` as typeof Grid;

export const ListImage = styled.img<TListImage>`
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 12px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: ${(props: any) => (props.selected ? 'solid 2px red' : 'none')};
`;

export const SelectedImage = styled.img`
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.shadow};
  object-fit: cover;
  width: 100%;
  height: 300px;
`;

export const SelectedProductWrap = styled.div`
  margin: 15px 0;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  min-height: 80px;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 4px;
`;

export const ProductTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.div`
  width: 100%;
  font-size: 20px;
  color: #777;
`;

export const SaleText = styled.div`
  span {
    margin-left: 5px;
    color: red;
  }
  font-weight: bold;
  margin-bottom: 10px;
`;
