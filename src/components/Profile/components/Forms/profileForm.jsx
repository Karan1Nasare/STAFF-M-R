/* eslint-disable import/no-extraneous-dependencies */

import React, { useEffect, useState } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import { Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from '../../../../hooks/hook-form';

import { useStore } from '../../../../store/context-store';
import AdminImageSelect from '../../../Admins/Form/AdminImageSelect';

const ProfileDetailsForm = ({ setValue }) => {
  const [file, setFile] = useState();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [Store, StoreDispatch] = useStore();

  useEffect(() => {
    if (file && file.length > 0) {
      setValue('profilePicture', file[0]);
    } else {
      setValue('profilePicture', null);
    }
  }, [file]);

  return (
    <div className='mt-3'>
      <AdminImageSelect file={file} setFile={setFile} />
      <div className='text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500   p-6 rounded-md flex items-center justify-between'>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='Org Name'
              label='Org Name*'
              placeholder='Enter name'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='Email'
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
              name='OrgPhoneNumber'
              type='number'
              label='Org Phone Number*'
              placeholder='Enter Phone Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='OrgPersonName'
              label='Org Person Number*'
              placeholder='Enter Person Name'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='OrgPersonNumber'
              type='number'
              label='Org Person Number*'
              placeholder='Enter Person Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='WebUrl'
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
              name='AdminGstNumber'
              type='text'
              label='GST Number'
              placeholder='Enter GST Number'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='AlternativePhoneNumber'
              type='number'
              label='Alternative Phone Number*'
              placeholder='Enter Phone Number'
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
              name='orgAddress'
              type='text'
              label='Org Address*'
              placeholder='814 Howard Street, 120065, India'
              fullWidth
              required
            />
          </Grid>
          <Grid item md={6}>
            <RHFTextField
              size='small'
              name='PinCode'
              type='text'
              label='Pin code*'
              placeholder='380058'
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProfileDetailsForm;
