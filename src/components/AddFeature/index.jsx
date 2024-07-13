import { Button, Typography } from '@mui/material';
import React from 'react';
import AddFeatureDetails from '../shared/AddFeatureDetails';
import UploadImage from '../shared/uploadImage/uploadImage';

const AddFeatureCard = () => {
  return (
    <div>
      <Typography className='flex align-items-start' variant='mainLayoutTitle'>
        Features
      </Typography>
      <UploadImage />
      <AddFeatureDetails />
      <div className='flex justify-end mt-6 '>
        <Button
          variant='contained'
          className='bg-white text-black hover:text-white'
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontSize: '1rem',
            fontWeight: '400',
          }}
        >
          Add Feature
        </Button>
      </div>
    </div>
  );
};

export default AddFeatureCard;
