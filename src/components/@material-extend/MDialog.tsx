import React, { useEffect, useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

interface MDialogProps {
  title: string;
  text: string;
  open: boolean;
  showCancel?: boolean;
  handleSubmit: any;
}

export default function MDialog({
  title,
  open,
  handleSubmit,
  showCancel = true,
  text
}: MDialogProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    setDialogOpen(open);
  }, [open]);

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog
      open={dialogOpen}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title" sx={{ pb: 2 }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description" sx={{ pb: 2 }}>
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {showCancel && (
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
        )}
        <Button variant="contained" onClick={handleSubmit}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
