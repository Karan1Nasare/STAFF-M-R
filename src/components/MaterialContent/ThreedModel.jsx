import React, { useState } from 'react';
import { Box, styled } from '@mui/system';
import { Grid, Paper } from '@mui/material';
import { Icon } from '@iconify/react';
import MrCKEditor from './tools/CKeditor/MrCKEditor';
import HeadSection from './tools/HeadSection';
import MrDropzone from './tools/MrDropzone';
import AddVideoCard from './tools/AddVideoCard/AddVideoCard';
import MaterialContentHelper from './utils/common';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F6B336',
}));
export default function ThreedModel() {
  const documentHelper = MaterialContentHelper();
  const [document, setdocument] = useState(documentHelper.generateVideoCard(3));
  const addThreeDModelCard = () => {
    setdocument(prevValues => [
      ...prevValues,
      ...documentHelper.generateVideoCard(1),
    ]);
  };
  return (
    <div>
      <HeadSection title='Documents' />
      <Grid container spacing={2}>
        {document.map((documentItem, idx) => (
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
                  title: 'Upload 3D Model',
                  mimeType: ['.pdf'],
                  description: 'Max File Size 50 MB',
                }}
              />
            </Item>
          </Grid>
        ))}

        <Grid item xs={6} md={4}>
          <Item>
            <AddVideoCard title='Add Document' onSubmit={addThreeDModelCard} />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
