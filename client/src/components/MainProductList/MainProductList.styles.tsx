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
  background-color: #ffffff;
  z-index: 2;
  width: 100%;
  height: 30px;
  padding: 15px;
  top: -10px;
  > div {
    text-align: center;
  }
`;

export const StyledGridContainer = styled(Grid)`
  margin: 10px 0;
  top: 0;
  > div {
    text-align: center;
  }
`;

interface IStyledCategoryWrap {
  selected: boolean;
}
export const StyledCategoryWrap = styled(Grid)<IStyledCategoryWrap>`
  > div {
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.shadow};
    line-height: 30px;
    background-color: ${(props: IStyledCategoryWrap) =>
      props.selected ? '#FE72A9' : 'white'};
    color: ${(props: IStyledCategoryWrap) =>
      props.selected ? 'white' : 'black'};
  }
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
