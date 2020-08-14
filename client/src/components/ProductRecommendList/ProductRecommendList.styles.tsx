import styled from 'styled-components';
import { Grid, Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

export const StyledListTitle = styled.div`
  padding: 6px 0;
  font-size: 15px;
  font-weight: 500;
`;

export const StyledRecommendList = styled(Grid)`
  width: 100%;
`;

export const StyledListWrapper = styled.div`
  background: white;
  padding: 8px 0;
`;

export const StyledRefreshButton = styled(Button)`
  && {
    width: 100%;
    margin: 12px 0 4px;
    background: white !important;
    padding: 4px 0;
    text-align: center;
    box-shadow: ${(props) => props.theme.shadow};
    .MuiButton-label {
      font-size: 12px;
    }
  }
`;

export const StyledRefreshIcon = styled(RefreshIcon)`
  && {
    font-size: 14px;
    margin-right: 6px;
  }
`;
