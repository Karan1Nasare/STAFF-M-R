import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

import AuthButtonBg from '../../../../assets/auth/buttonBg.svg';

const ChangePasswordForm = () => {
  return (
    <div className='text-white text-start w-[40%] lg:ml-64'>
      <Typography variant='title' className='text-start block mb-10'>
        Change Password
      </Typography>

      <div className='text-start mt-6 mb-6'>
        <div className='lg:mb-6'>
          <TextField
            autoFocus={true}
            id='username'
            placeholder='Enter Password'
            label=''
            name='username'
            className='underline-border w-full'
            variant='standard'
          />
        </div>
        <div>
          <TextField
            autoFocus={true}
            id='password'
            placeholder='Confirm Password'
            label=''
            name='password'
            className='underline-border w-full'
            variant='standard'
          />
        </div>
      </div>
      <div className='authButton mt-10'>
        <img src={AuthButtonBg} alt='' />
        <Button variant='outline-primary'>Send Link</Button>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
