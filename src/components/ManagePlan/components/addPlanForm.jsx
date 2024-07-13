import { Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import RichTextEditor from '../../shared/RichTextEditor';
import Dropdown from '../../shared/DropDown';

const AddPlanForm = () => {
  const planValidityOptions = ['Yearly', 'Half Quarter', 'Monthly', 'Weekly'];
  const [selectPlanValidityOption, setSelectPlanValidityOption] = useState(
    'Select Plan Validity',
  );
  const planStatusOptions = ['Popular', 'Normal'];
  const [selectPlanStatus, setSelectPlanStatus] = useState('Select Plan Type');

  return (
    <div className='bg-secondary__fill h-full w-34 mt-4 p-8 rounded-lg'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col items-start'>
          <div className='mb-3'>
            <Typography variant='h6' className='text-white'>
              Standard
            </Typography>
          </div>
          <TextField
            placeholder='Enter Standard'
            type='text'
            fullWidth
            sx={{
              borderColor: '#343B4F',
            }}
          />
        </div>
        <div className='flex flex-col items-start'>
          <div className='mb-3'>
            <Typography variant='h6' className='text-white'>
              Plan Name
            </Typography>
          </div>
          <TextField placeholder='Enter Plan name' type='text' fullWidth />
        </div>
      </div>
      <div className='flex flex-col mt-10 '>
        <div className='mb-3 text-start'>
          <Typography variant='h6' className='text-white'>
            Description<span className='text-red-500'>*</span>
          </Typography>
        </div>
        <RichTextEditor />
      </div>
      <div className='grid grid-cols-2 gap-4 mt-10'>
        <div className='flex flex-col items-start'>
          <div className='mb-3'>
            <Typography variant='h6' className='text-white'>
              Rate (Amount)
            </Typography>
          </div>
          <TextField placeholder='Enter Rate' type='text' fullWidth />
        </div>

        <div className='flex flex-col items-start '>
          <div className='mb-3'>
            <Typography variant='h6' className='text-white'>
              Total Amount
            </Typography>
          </div>
          <TextField
            variant='outlined'
            placeholder='Enter Total Amount'
            type='text'
            fullWidth
          />
        </div>
        <div className='flex flex-col items-start mt-3'>
          <div className='mb-3'>
            <Typography variant='h6' className='text-white'>
              Select Plan Validity
            </Typography>
          </div>
          <div className='border  rounded-md  text-white border-gray-700 border-solid bg-secondary__fill h-full w-full '>
            <Dropdown
              className='h-full w-full'
              options={planValidityOptions}
              selectedOption={selectPlanValidityOption}
              setSelectedOption={setSelectPlanValidityOption}
            />
          </div>
        </div>
        <div className='flex flex-col items-start mt-3'>
          <div className='mb-3'>
            <Typography variant='h6' className='text-white'>
              Plan Status
            </Typography>
          </div>
          <div className='border  rounded-md  text-white border-gray-700 border-solid bg-secondary__fill h-full w-full '>
            <Dropdown
              className='h-full w-full'
              options={planStatusOptions}
              selectedOption={selectPlanStatus}
              setSelectedOption={setSelectPlanStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlanForm;
