import React from 'react';
import { Typography } from '@mui/material';

import Header from './components/header';
import PaymentTable from './components/paymentTable';

const PaymentHistory = () => {
  return (
    <div className='overflow-x-hidden'>
      <Typography className='flex align-items-start' variant='mainLayoutTitle'>
        Payment History
      </Typography>
      <Header />
      <PaymentTable />
    </div>
  );
};

export default PaymentHistory;
