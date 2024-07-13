/* eslint-disable import/no-extraneous-dependencies */

import React, { useState } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import { Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AdminImageSelect from './AdminImageSelect';
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from '../../../hooks/hook-form';
import Button from '../../shared/buttons/Button';
import colors from '../../../theme/colors';
import { useStore } from '../../../store/context-store';

const AdminDetailsForm = () => {
  const [file, setFile] = useState();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [Store, StoreDispatch] = useStore();

  // const schema = zod
  //   .object({
  //     AdminName: zod.string().nonempty('Name Is Required'),
  //     AdminEmail: zod.string().email('Email Is Required'),
  //     AdminPhoneNumber: zod.string().nonempty('PhoneNumber Is Required'),
  //     AdminGstNumber: zod.string().nonempty('Gst Number Is Required'),
  //     AdminWebUrl: zod.string().nonempty('Website url Is Required'),
  //     AdminState: zod.string().nonempty('State Is Required'),
  //     AdminCity: zod.string().nonempty('City Is Required'),
  //     AdminAddress: zod.string().nonempty('Address Is Required'),
  //     AdminPinCode: zod.string().nonempty('PinCode Is Required'),
  //     AdminPassword: zod.string().nonempty('Password Is Required'),
  //     AdminCPassword: zod.string().nonempty('Confirm Password Is Required'),
  //   })
  //   .refine(data => data.AdminPassword === data.AdminCPassword, {
  //     message: 'Passwords do not match',
  //     path: ['AdminCPassword'],
  //   });
  // const defaultValues = {
  //   AdminName: '',
  //   AdminEmail: '',
  //   AdminPhoneNumber: '',
  //   AdminGstNumber: '',
  //   AdminWebUrl: '',
  //   AdminState: '',
  //   AdminCity: '',
  //   AdminAddress: '',
  //   AdminPinCode: '',
  //   AdminPassword: '',
  //   AdminCPassword: '',
  // };
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <div className='mt-3'>
      <AdminImageSelect />
      <div className='text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500   p-6 rounded-md flex items-center justify-between'>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminName'
              label='Admin Name*'
              placeholder='Enter name'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminEmail'
              type='email'
              label='Email*'
              placeholder='Enter Email'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminPhoneNumber'
              type='number'
              label='Admin Phone Number*'
              placeholder='Enter Phone Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminGstNumber'
              type='text'
              label='GST Number'
              placeholder='Enter GST Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={12}>
            <RHFTextField
              size='small'
              name='AdminWebUrl'
              type='text'
              label='Website*'
              placeholder='www.abcorg.com'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminState'
              type='text'
              label='State*'
              placeholder='Gujarat'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminCity'
              type='text'
              label='City*'
              placeholder='Gandhinagar'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminAddress'
              type='text'
              label='Admin Address*'
              placeholder='814 Howard Street, 120065, India'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminPinCode'
              type='text'
              label='Pin code*'
              placeholder='380058'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminPassword'
              type={showPass ? 'text' : 'password'}
              label='Password*'
              placeholder='814 Howard Street, 120065, India'
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPass(!showPass)}
                      edge='end'
                      className='text-white'
                    >
                      {showPass ? (
                        <VisibilityOff className='text-white' />
                      ) : (
                        <Visibility className='text-white' />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AdminCPassword'
              type={showConfirmPass ? 'text' : 'password'}
              label='Confirm Password*'
              placeholder='Enter Confirm Password'
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      edge='end'
                      className='text-white'
                    >
                      {showConfirmPass ? (
                        <VisibilityOff className='text-white' />
                      ) : (
                        <Visibility className='text-white' />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AdminDetailsForm;
