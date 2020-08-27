import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { AlertProps } from '@material-ui/lab/Alert';
import { StyledNotification } from './Notification.styles';
import {
  usePageState,
  IPageInContext,
  usePageDispatch,
  closeNotification,
} from '../../context/pageContext';

function Alert(props: AlertProps) {
  return <StyledNotification elevation={6} variant="filled" {...props} />;
}

export default function Notification() {
  const page: IPageInContext = usePageState();
  const dispatch = usePageDispatch();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    closeNotification(dispatch);
  };
  return (
    <Snackbar
      open={page.onNotification}
      autoHideDuration={10000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="info">
        {page.message}
      </Alert>
    </Snackbar>
  );
}
