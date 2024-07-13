import React, { useCallback, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  TextField,
  FormControl,
  Paper,
  Grid,
  Container,
  Typography,
  Divider,
} from '@mui/material';
import { RiImageAddLine } from 'react-icons/ri';
import MrDropzone from './tools/MrDropzone';
import MrCKEditor from './tools/CKeditor/MrCKEditor';
import colors from '../../theme/colors';
import HeadSection from './tools/HeadSection';
import UploadVideo from '../shared/UploadVideo/index';

const BasicDetailsContainer = styled(Box)(({ theme }) => ({
  overflowY: 'auto',
  maxHeight: '80vh', // Adjust this value as needed
  padding: theme.spacing(2),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F6B336',
}));

// const HeadSection = () => (
//   <div className='relative flex flex-col items-start gap-3 w-full'>
//     <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
//     <h6 className='text-3xl font-bold dark:text-orange ml-2'>Thumbnail</h6>
//     <Typography variant='addCourseSubtitle' className='!mb-5'>
//       Select or upload a picture that shows what's in your video. A good
//       thumbnail stands out and draws viewers' attention.
//     </Typography>
//   </div>
// );

function BasicDetails({
  submitRef,
  files,
  setFiles,
  isUpload,
  setUpload,
  title,
  setTitle,
  setVideoUpload,
  isVideoUpload,
}) {
  console.log(submitRef, 'submitRef');

  const onDropThumbnail1 = useCallback(
    acceptedFiles => {
      // Handle the files
      const filesTemp = [...files];
      filesTemp[0] = {
        file: acceptedFiles[0],
        src: URL.createObjectURL(acceptedFiles[0]),
      };
      console.log(filesTemp, 'filesTemp');
      setFiles(filesTemp);
      setUpload(true);
    },
    [files],
  );

  const onDropThumbnail2 = useCallback(
    acceptedFiles => {
      // Handle the files
      const filesTemp = [...files];
      filesTemp[1] = {
        file: acceptedFiles[0],
        src: URL.createObjectURL(acceptedFiles[0]),
      };
      console.log(filesTemp);
      setFiles(filesTemp);
      setVideoUpload(true);
    },
    [files],
  );

  const onRemoveThumbnail1 = () => {
    const filesTemp = [...files];
    filesTemp[0] = { file: {}, src: '' };
    setFiles(filesTemp);
  };

  const onRemoveThumbnail2 = () => {
    const filesTemp = [...files];
    filesTemp[1] = { file: {}, src: '' };
    setFiles(filesTemp);
  };

  const onChange = e => {
    setTitle(e.target.value);
    // console.log('value', e.target.value);
  };

  return (
    <BasicDetailsContainer>
      {/* Thumbnail Section */}
      <HeadSection
        title={'Thumbnail'}
        details={
          "Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention."
        }
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <MrDropzone
                onDrop={onDropThumbnail1}
                files={files?.[0]}
                onRemoveThumbnail={onRemoveThumbnail1}
                imgIcon={
                  <RiImageAddLine size={40} style={{ marginBottom: '20px' }} />
                }
                uploadMetadata={{
                  title: 'Upload Thumbnail',
                  mimeType: ['.pdf'],
                  description: 'Max File Size 50 MB',
                }}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <UploadVideo onDrop={onDropThumbnail2} isUpload={isVideoUpload} />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Divider
        sx={{
          background: theme => theme.color.border_color,
          marginTop: '10px',
        }}
      />
      <Grid container mt={2}>
        <Grid item xs={12}>
          <Item>
            <p className='text-white text-left'>
              Title <span className='text-red-600'>*</span>
            </p>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                className='w-4/12'
                variant='outlined'
                placeholder='Enter title'
                value={title}
                onChange={onChange}
                fullWidth
                InputProps={{
                  sx: {
                    height: '2.5rem !important',
                    background: colors.secondary__fill__dark,
                    border: 'none',
                    borderRadius: '0.375rem',
                  },
                }}
              />
            </FormControl>
          </Item>
        </Grid>
      </Grid>
      <Grid container mt={2} mb={6}>
        <Grid item xs={12}>
          <Item>
            <p className='text-white text-left'>
              Description <span className='text-red-600'>*</span>
            </p>
            <FormControl fullWidth sx={{ m: 1 }}>
              <MrCKEditor />
            </FormControl>
          </Item>
        </Grid>
      </Grid>
    </BasicDetailsContainer>
  );
}

export default BasicDetails;
