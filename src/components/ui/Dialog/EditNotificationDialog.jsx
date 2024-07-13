/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { padding, Stack, styled } from '@mui/system';
import {
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ProfileImage from '../../../assets/images/profile-image.png';
import RichTextEditor from '../../shared/RichTextEditor';
import Button from '../../shared/buttons/Button';
import AnnouncementImage from '../../../assets/announcement_card.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ImgStyled = styled('img')(({ theme }) => ({
  width: '100%',
  height: '120px',
  marginRight: theme.spacing(6),
  borderRadius: 0,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
}));

export default function EditNotificationDialog(props) {
  const { open, handleClose, data, updateHandler } = props;
  const [imgSrc, setImgSrc] = React.useState(data?.image);
  const theme = useTheme();
  const [inputValue, setInputValue] = React.useState();
  const [editorValue, setEditorValue] = React.useState(data?.description);

  React.useEffect(() => {
    if (open) {
      setImgSrc(data?.image);
      setInputValue(data?.content);
    }
  }, [open]);

  const handleInputImageChange = file => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);

      if (reader.result !== null) {
        setInputValue(reader.result);
      }
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        fullWidth={'sm'}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogContent sx={{ overflow: 'hidden' }}>
          <Stack>
            <Typography sx={{ color: 'white' }}>Edit Notifications</Typography>
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
          </Stack>
          <Divider sx={{ background: '#6B7A99', margin: '8px 0' }} />
          <Stack spacing={3} sx={{ marginTop: '20px' }}>
            <Stack
              sx={{
                position: 'relative',
                width: '100%',
              }}
            >
              <ImgStyled src={imgSrc} alt='Profile Pic' />

              <IconButton
                component='label'
                role={undefined}
                variant='contained'
                tabIndex={-1}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: ' 42%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  borderRadius: '0%',
                  color: 'rgba(255, 255, 255, 0.4)',
                }}
              >
                <AddPhotoAlternateIcon />
                <Typography>Choose</Typography>
                <input
                  hidden
                  type='file'
                  value={inputValue}
                  accept='image/png, image/jpeg'
                  onChange={handleInputImageChange}
                  id='account-settings-upload-image'
                />
              </IconButton>
            </Stack>
            <Stack
              alignItems={'center'}
              justifyContent={'center'}
              spacing={3}
              sx={{
                '& .ck-content': {
                  width: '100% !important',
                },
              }}
            >
              <input
                type='text'
                placeholder='Search Name, Enrollment, Standard'
                className='bg-transparent text-white placeholder-white p-2 rounded-md border border-[#343B4F] text-sm w-full'
              />
              <div className='w-full'>
                <RichTextEditor value={editorValue} setValue={setEditorValue} />
              </div>
              <Button
                sx={{
                  background: 'white',
                  display: 'inline-block',
                  color: '#000',
                  fontWeight: 'normal',
                  padding: '8px 16px',
                }}
                onClick={updateHandler}
              >
                Update
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
