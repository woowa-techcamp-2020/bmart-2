import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';

export const StyledFavoriteCheck = styled(Checkbox)`
  && {
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    margin: 0;
    svg {
      width: 8vw !important;
      height: 8vw !important;
    }
  }
` as typeof Checkbox;
