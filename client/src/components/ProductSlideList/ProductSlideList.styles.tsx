import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const StyledListTitle = styled.div`
  padding: 6px 0;
  font-size: 15px;
  font-weight: 500;
`;

const StyledSlideList = styled(Grid)`
  width: 100%;
  overflow-x: auto;
  flex-wrap: noWrap;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

const StyledSlideListWrapper = styled.div`
  background: white;
  padding: 8px 0;
`;

export { StyledListTitle, StyledSlideList, StyledSlideListWrapper };
