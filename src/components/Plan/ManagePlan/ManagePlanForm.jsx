/* eslint-disable import/no-extraneous-dependencies */
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Grid } from '@mui/material'; // Import individual components from MUI
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ImageSelection from './From/ImageSelection';
import {
  FormProvider, // Import FormProvider
  RHFSelect, // Import RHFSelect
  RHFTextField, // Import RHFTextField
} from '../../../hooks/hook-form';
import TextEditor from '../../ui/TextEditor/TextEditor';
import colors from '../../../theme/colors';
import Button from '../../shared/buttons/Button';

const ManagePlanForm = () => {
  const [file, setFile] = useState();
  const schema = zod.object({
    plan_name: zod.string().nonempty('Plan Name Is Required'),
    plan_type: zod.string().nonempty('Plan Type Is Required'),
    plan_status: zod.string().nonempty('Plan Status Is Required'),
    plan_validity: zod.string().nonempty('Plan Validity Is Required'),
    total_amount: zod.string().nonempty('Total Amount Is Required'),
    rate_amount: zod.string().nonempty('Rate Amount Is Required'),
  });
  const defaultValues = {
    plan_name: 'SSS',
    plan_type: 'bronze',
    plan_status: 'popular',
    plan_validity: '',
    total_amount: '',
    rate_amount: '',
  };
  const methods = useForm({ defaultValues, resolver: zodResolver(schema) });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async data => {
    console.debug('onSubmit', file);
    console.debug('onSubmit', data);
  };
  return (
    <>
      <div className='w-full  pb-9'>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <ImageSelection />
          <div className='text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500 border border-bright__grey  p-6 rounded-md flex items-center justify-between'>
            <Grid container spacing={4}>
              <Grid item md={6}>
                <p className='text-left text-white mb-1'>Plan Name</p>
                <RHFTextField
                  size='small'
                  name='plan_name'
                  label=''
                  placeholder='Enter plan name'
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <p className='text-left text-white mb-1'>Plan Type</p>
                <RHFSelect
                  size='small'
                  name='plan_type'
                  options={[
                    { label: 'Bronze', value: 'bronze' },
                    { label: 'Silver', value: 'silver' },
                    { label: 'Gold', value: 'gold' },
                  ]}
                />
              </Grid>
              <Grid item md={12}>
                <p className='text-left text-white mb-1'>Description</p>
                <TextEditor />
              </Grid>
              <Grid item md={6}>
                <p className='text-left text-white mb-1'>Rate (Amount)</p>
                <RHFTextField
                  size='small'
                  name='rate_amount'
                  label=''
                  placeholder='Rate (Amount)'
                />
              </Grid>
              <Grid item md={6}>
                <p className='text-left text-white mb-1'>Total Amount</p>
                <RHFTextField
                  size='small'
                  name='total_amount'
                  label=''
                  placeholder='Total Amount'
                />
              </Grid>
              <Grid item md={6}>
                <p className='text-left text-white mb-1'>
                  Select Plan Validity
                </p>
                <RHFSelect
                  size='small'
                  name='plan_validity'
                  options={[
                    { label: 'Yearly', value: 'Yearly' },
                    { label: 'Half Quarter', value: 'Half-Quarter' },
                    { label: 'Monthly', value: 'Monthly' },
                    { label: 'Weekly', value: 'Weekly' },
                  ]}
                />
              </Grid>
              <Grid item md={6}>
                <p className='text-left text-white mb-1'>Select Plan Status</p>
                <RHFSelect
                  size='small'
                  name='plan_status'
                  options={[
                    { label: 'Normal', value: 'normal' },
                    { label: 'Popular', value: 'popular' },
                  ]}
                />
              </Grid>
            </Grid>
          </div>
          <div className='flex justify-end'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={isSubmitting}
              sx={{ mt: 3, background: 'white', color: colors.black }}
            >
              Add Plan
            </Button>
          </div>
        </FormProvider>
      </div>
    </>
  );
};

export default ManagePlanForm;
