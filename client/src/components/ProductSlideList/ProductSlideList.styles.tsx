import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const StyledListTitle = styled.div`
  padding: 6px 0;
  font-size: 15px;
  font-weight: 500;
`;

export const StyledSlideList = styled(Grid)`
  width: 100%;
  overflow-x: auto;
  flex-wrap: noWrap;
  scroll-behavior: smooth;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledSlideListWrapper = styled.div`
  background: white;
  padding: 8px 0;
`;
