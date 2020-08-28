import styled from 'styled-components';
import { Sort } from '@material-ui/icons';
import { Grid } from '@material-ui/core';

export const StyledListTitle = styled.div`
  border-radius: 12px;
  /* border: 1px solid #ccc; */
  box-shadow: ${(props) => props.theme.shadow};
  padding: 6px 16px;
  text-align: right;
`;

export const StyledListTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0 16px;
`;

export const StyledListWrapper = styled.div`
  background: white;
  padding: 28px 0 16px;
  position: relative;
`;

export const StyledSortList = styled(Grid)`
  width: 100%;
`;

export const SortIcon = styled(Sort)`
  font-size: 1rem !important;
`;

export const StyledEmptyImg = styled.img`
  height: 200px;
  width: 200px;
  padding-top: 100px;
`;

export const StyledEmptyImgWrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
`;
