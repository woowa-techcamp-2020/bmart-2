import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { backgroundUrlImage, TImageUrl } from '../../shared/style.styles';

interface TListImage extends TImageUrl {
  selected: boolean;
}

export const StyledSaleNowWrapper = styled.div`
  margin: 6vw 0;
`;

export const StyledProduct = styled(Grid)`
  border-radius: ${(props) => props.theme.border.radius};
  background: white;
` as typeof Grid;

export const ListImage = styled.div<TListImage>`
  border-radius: ${(props) => props.theme.border.radius};
  width: 22vw;
  height: 24vw;
  ${(props: TImageUrl) => backgroundUrlImage(props.url)};
  box-sizing: border-box;
  border: ${(props: any) =>
    props.selected
      ? `solid 0.5vw ${props.theme.colors.main}`
      : 'solid 0.5vw rgba(0, 0, 0, 0)'};
`;

export const SelectedImage = styled.div`
  border-radius: ${(props) => props.theme.border.bigRadius};
  ${(props: TImageUrl) => backgroundUrlImage(props.url)};
  width: 100%;
  height: 60vw;
  position: relative;
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
  font-size: ${(props) => props.theme.font.default};
  font-weight: 600;
  padding: 2vw;
`;

export const ProductPrice = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.font.default};
  font-weight: 600;
  padding-left: 2vw;
  color: #777;
`;

export const SaleText = styled.div`
  font-size: ${(props) => props.theme.font.subTitle};
  font-weight: bold;
  margin-bottom: 4vw;
`;
