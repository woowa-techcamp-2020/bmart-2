import styled from 'styled-components';
import MuiAlert from '@material-ui/lab/Alert';

export const StyledNotification = styled(MuiAlert)`
  background-color: #000 !important;
  opacity: 0.7 !important;
  .MuiAlert-message,
  .MuiSvgIcon-root {
    color: #fff !important;
  }
`;
