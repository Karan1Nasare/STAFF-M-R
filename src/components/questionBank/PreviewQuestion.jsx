import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import QuePrevAccordion from './QuePrevAccordion';
import Button from '../shared/buttons/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const PreviewQuestion = props => {
  const { open, handleClose } = props;

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle sx={{ padding: '10px 0' }}>
          <Typography sx={{ color: 'white' }}>Preview</Typography>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <QuePrevAccordion />
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='primary'
            className='bg-blue-500 mx-auto mt-4'
          >
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default PreviewQuestion;
