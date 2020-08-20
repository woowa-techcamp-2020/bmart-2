import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { StyledSlideList } from '../ProductSlideList/ProductSlideList.styles';

export const StyledTitleWrap = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
`;

export const StyledMainTitle = styled.div`
  font-weight: bolder;
  font-size: 20px;
`;

export const StyledCategoryListWrap = styled(Grid)`
  margin: 10px 0;
  > div {
    text-align: center;
  }
`;

export const StyledCategoryWrap = styled(Grid)`
  min-width: 100px;
`;

export const StyledProductTitle = styled.div`
  font-size: larger;
  font-weight: bold;
  text-align: left;
  margin: 10px 0;
`;

export const StyledProductListWrap = styled.div`
  margin: 15px 0;
`;
