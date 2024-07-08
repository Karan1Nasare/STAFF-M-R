import React from 'react';
import { Typography } from '@mui/material';

// import LoginForm from './loginForm';
// import OtpForm from './otpForm';
// import ForgotPassword from './forgotPassword';

import Logo from '../../../assets/logo.svg';

const Layout = () => {
  return (
    <>
      <div className='flex flex-col lg:items-start w-full lg:w-1/2'>
        <img className='m-12 w-40 lg:m-10' src={Logo} alt='Logo' />

        <div className=' items-center text-start justify-center lg:ml-10 text-white  lg:mt-32 xl:mt-56 2xl:mt-60'>
          <Typography variant='title' className='text-start  font-bold'>
            M&R&apos;s Seamless Control Hub
          </Typography>

          <br />
          <Typography className='text-base lg:text-lg'>
            M&R Education offers a robust Admin Panel, granting schools and
            colleges complete control over student management, exam creation,
            and more. Streamline administrative tasks for enhanced efficiency in
            academic oversight.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Layout;
