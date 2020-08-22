import styled from 'styled-components';
import { Sort } from '@material-ui/icons';
import { Grid } from '@material-ui/core';

export const StyledListTitle = styled.div`
  padding: 6px 0 12px;
  font-size: 15px;
  text-align: right;
  width: 100%;
`;

export const StyledListWrapper = styled.div`
  background: white;
  padding: 8px 0;
  position: relative;
`;

export const StyledSortList = styled(Grid)`
  width: 100%;
`;

export const SortIcon = styled(Sort)`
  font-size: 14px !important;
`;
