import React from 'react';
import { Button, Typography } from '@mui/material';

import AddPlanForm from './components/addPlanForm';
import UploadImage from '../shared/uploadImage/uploadImage';

const ManagePlan = () => {
  return (
    <>
      <div
        className='w-full'
        style={{
          height: '100vh', // Ensure container takes full viewport height
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '50px',
          // Disable container-level overflow
        }}
      >
        <Typography
          className='flex align-items-start'
          variant='mainLayoutTitle'
        >
          Manage Plan
        </Typography>
        <UploadImage />
        <AddPlanForm />
        <div className='flex justify-end mt-6 '>
          <Button
            variant='contained'
            className='hover:text-white'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontSize: '1rem',
              fontWeight: '400',
            }}
          >
            Add Plan
          </Button>
        </div>
      </div>
    </>
  );
};

export default ManagePlan;
