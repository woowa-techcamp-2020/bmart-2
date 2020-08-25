import styled from 'styled-components';
import { ListSubheader, ListItemIcon, ListItem } from '@material-ui/core';

export const StyledSearchHistoryWrap = styled.div`
  margin-top: 20px;
`;

export const StyledDeleteIcon = styled(ListItemIcon)`
  min-width: 20px !important;
`;

export const StyledListItem = styled(ListItem)`
  padding: 0 !important;
`;

export const StyledListHeader = styled(ListSubheader)`
  font-size: 20px !important;
  font-weight: bold !important;
  color: black !important;
  padding: 0 !important;
`;
