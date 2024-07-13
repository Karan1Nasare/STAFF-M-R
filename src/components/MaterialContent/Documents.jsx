import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
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
const Documents = () => {
  const documentHelper = MaterialContentHelper();
  const [document, setdocument] = useState(documentHelper.generateVideoCard(3));
  const addVideoCard = () => {
    setdocument(prevValues => [
      ...prevValues,
      ...documentHelper.generateVideoCard(1),
    ]);
  };
  const theme = useTheme();
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
                  title: 'Upload Course',
                  mimeType: ['.pdf'],
                  description: 'Max File Size 15 MB',
                }}
              />
            </Item>
          </Grid>
        ))}

        <Grid item xs={6} md={4}>
          <Item>
            <AddVideoCard title='Add Document' onSubmit={addVideoCard} />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Documents;
