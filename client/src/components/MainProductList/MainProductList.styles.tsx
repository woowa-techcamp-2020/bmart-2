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
  height: 40px;
  top: 40px;
  padding-top: 10px;
  > div {
    text-align: center;
  }
`;

export const StyledGridContainer = styled(Grid)`
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
    margin-right: 20px;
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.shadow};
    line-height: 30px;
    background-color: ${(props: IStyledCategoryWrap) =>
      props.selected ? '#FE72A9' : 'white'};
    color: ${(props: IStyledCategoryWrap) =>
      props.selected ? 'white' : 'black'};
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  min-width: 120px;
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
