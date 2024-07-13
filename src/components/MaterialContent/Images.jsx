import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Icon } from '@iconify/react';
import MrDropzone from './tools/MrDropzone';
import HeadSection from './tools/HeadSection';
import MaterialContentHelper from './utils/common';
import AddVideoCard from './tools/AddVideoCard/AddVideoCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F6B336',
}));

const Images = () => {
  const theme = useTheme();
  const imageHelper = MaterialContentHelper();
  const [image, setImage] = useState(imageHelper.generateVideoCard(3));
  const addVideoCard = () => {
    setImage(prevValues => [
      ...prevValues,
      ...imageHelper.generateVideoCard(1),
    ]);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeadSection title={'Images'} />
      <Grid container spacing={2}>
        {image.map((videItem, idx) => {
          return (
            <Grid item xs={6} md={4} key={idx}>
              <Item>
                <MrDropzone
                  imgIcon={
                    <Icon
                      icon='grommet-icons:document-upload'
                      fontSize={30}
                      style={{ marginBottom: '20px' }}
                    ></Icon>
                  }
                  uploadMetadata={{
                    title: 'Upload Image',
                    mimeType: ['.png', '.jpg', '.jpeg', '.gif'],
                    description: 'Max File Size 2 MB',
                  }}
                />
              </Item>
            </Grid>
          );
        })}
        <Grid item xs={6} md={4}>
          <Item>
            <AddVideoCard title='Add Image' onSubmit={addVideoCard} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Images;
