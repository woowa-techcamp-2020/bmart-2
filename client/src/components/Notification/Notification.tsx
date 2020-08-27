import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { AlertProps } from '@material-ui/lab/Alert';
import { StyledNotification } from './Notification.styles';

function Alert(props: AlertProps) {
  return <StyledNotification elevation={6} variant="filled" {...props} />;
}

export default function Notification() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleClick}>Open success snackbar</button>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
