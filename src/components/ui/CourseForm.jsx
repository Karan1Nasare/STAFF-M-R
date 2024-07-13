import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Grid,
  styled,
} from '@mui/material';
import {
  UploadFile as UploadFileIcon,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  InsertLink,
  InsertPhoto,
  EmojiEmotions,
} from '@mui/icons-material';
import TextField from '../shared/input/TextField';

const UploadBoxContainer = styled(Box)(({ theme }) => ({
  width: 150,
  height: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '80%',
    height: '80%',
    border: '2px dashed #fff',
    borderRadius: '50%',
  },
}));
const CourseForm = () => {
  return (
    <Paper elevation={3} className=' bg-[#0B1739] p-4 text-white'>
      <Grid
        className='flex justify-between border border-[#343B4F] bg-[#0B1739] p-8 rounded-xl'
        container
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={2}
          className=' border  h-[200px] rounded-[20px] flex justify-center items-center'
        >
          <UploadBoxContainer>
            <IconButton>
              <UploadFileIcon fontSize='large' style={{ color: '#fff' }} />
            </IconButton>
          </UploadBoxContainer>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={10} className=''>
          <Box className='w-full pl-[30px]'>
            <TextField
              fullWidth
              label='Course Name [STD]'
              placeholder='Enter Course Name'
              id='form-props-full-width'
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box className='w-full pl-[30px]'>
            <Typography
              variant='body1'
              className='text-left'
              color='#ffffff'
              mb={1}
            >
              Description*
            </Typography>
            <Box className=' relative'>
              <TextField
                id='description'
                placeholder='Enter Description...'
                multiline
                rows={4}
                variant='outlined'
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{ position: 'relative' }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  marginTop: '8px',
                  position: 'absolute',
                  bottom: '26px', // Adjust this value as needed to place the toolbar
                  left: 0,
                }}
              >
                <IconButton sx={{ color: '#ffffff' }}>
                  <FormatBold />
                </IconButton>
                <IconButton sx={{ color: '#ffffff' }}>
                  <FormatItalic />
                </IconButton>
                <IconButton sx={{ color: '#ffffff' }}>
                  <FormatUnderlined />
                </IconButton>
                <IconButton sx={{ color: '#ffffff' }}>
                  <FormatAlignLeft />
                </IconButton>
                <IconButton sx={{ color: '#ffffff' }}>
                  <FormatAlignCenter />
                </IconButton>
                <IconButton sx={{ color: '#ffffff' }}>
                  <FormatAlignRight />
                </IconButton>
                <IconButton sx={{ color: '#ffffff' }}>
                  <InsertLink />
                </IconButton>
                <IconButton sx={{ color: '#ffffff' }}>
                  <InsertPhoto />
                </IconButton>
                <IconButton sx={{ color: '#ffffff' }}>
                  <EmojiEmotions />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CourseForm;
