import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';

export const StyledTitleWrap = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
`;

export const StyledMainTitle = styled.div`
  font-weight: bolder;
  font-size: 1.3rem;
  padding: 2vw;
`;

export const StyledStickyWrap = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 55px;
  z-index: 5;
  @media only all and (max-width: 600px) {
    padding-left: 16px;
  }
  @media only all and (min-width: 600px) {
    padding-left: 24px;
  }
`;

export const StyledCategoryListWrap = styled(Grid)`
  margin: 10px 0;
  background-color: #ffffff;
  z-index: 2;
  width: 100%;
  height: 40px;
  top: 20px;
  padding-top: 10px;
  position: sticky;
  position: -webkit-sticky;
  padding-bottom: 10px;

  > div {
    text-align: center;
  }
`;

export const StyledGridContainer = styled(Container)`
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
    padding: 1vw;
    margin-right: 2vw;
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.shadow};
    line-height: 30px;
    background-color: ${(props: IStyledCategoryWrap) =>
      props.selected ? '#e95157' : 'white'};
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

export const CategoryTitle = styled.div`
  font-size: ${(props) => props.theme.font.subTitle};
  font-weight: 600;
  margin: 1.3rem 0 1rem;
  display: flex;
  img {
    width: ${(props) => props.theme.font.subTitle};
    height: ${(props) => props.theme.font.subTitle};
    margin-right: 10px;
  }
`;
