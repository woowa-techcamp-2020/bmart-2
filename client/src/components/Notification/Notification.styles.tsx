import styled from 'styled-components';
import MuiAlert from '@material-ui/lab/Alert';

export const StyledNotification = styled(MuiAlert)`
  background-color: rgba(0, 0, 0, 0.7) !important;
  .MuiAlert-message,
  .MuiSvgIcon-root {
    color: #fff !important;
  }
`;
