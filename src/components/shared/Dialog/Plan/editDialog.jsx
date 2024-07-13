import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@iconify/react';

import AnnouncementImage from '../../../../assets/announcement_card.png';
import RichTextEditor from '../../RichTextEditor';
import Dropdown from '../../DropDown';

const EditPlan = ({ isOpen, onClose, title, heading }) => {
  if (!isOpen) {
    return null;
  }

  const [bgImage, setBgImage] = useState(AnnouncementImage);

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgImage(reader.result); // Update background image state with selected image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 text-start'>
      <div className='flex flex-col px-8 py-7 rounded-3xl border border-gray-700 border-solid text-start bg-secondary__fill max-w-[673px] max-md:px-5'>
        <div className='flex gap-5 text-xl text-white max-md:flex-wrap max-md:max-w-full'>
          <div className='flex-auto my-auto '>{heading}</div>
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className='shrink-0 items-center h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
        <div className='flex overflow-hidden relative rounded flex-col justify-center items-center px-20 pt-11 pb-20 mt-11 text-base text-center text-white whitespace-nowrap min-h-[158px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <img
              loading='lazy'
              src={bgImage}
              className='object-cover w-full h-full opacity-50'
            />
          </div>

          <div className='relative z-10 flex flex-col items-center justify-center'>
            <label htmlFor='fileInput' className='cursor-pointer'>
              <Icon
                icon={'uil:image-upload'}
                className='text-white text-xl mb-1'
              />
              <input
                id='fileInput'
                type='file'
                hidden
                onChange={handleFileChange}
              />
            </label>
            <span
              className='text-white text-lg cursor-pointer'
              onClick={() => document.getElementById('fileInput').click()}
            >
              Change
            </span>
          </div>
        </div>

        <div className='flex flex-wrap gap-5 content-start mt-5 text-sm '>
          <div className='flex flex-col flex-1'>
            <div className='mb-2'>
              <Typography variant='h6' className='text-white'>
                Plan Name
              </Typography>
            </div>

            <input
              type='text'
              className='w-full px-3 py-3 rounded border border-gray-700 leading-[143%] text-stone-300 focus:outline-none focus:ring-2 focus:ring-primary bg-transparent'
              value={title}
            />
          </div>
          <div className='flex flex-col flex-1 '>
            <div className='mb-2'>
              <Typography variant='h6' className='text-white '>
                Select Plan Type
              </Typography>
            </div>
            <div>
              <div className='border  rounded-md  text-white border-gray-700 border-solid bg-secondary__fill h-full w-full '>
                <Dropdown className='h-full w-full' />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='mt-5'>
            <Typography variant='h6' className=' text-sm text-white'>
              Description
            </Typography>
          </div>
          <div className='mt-2'>
            <RichTextEditor />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4 mt-5'>
          <div>
            <Typography variant='h6' className='text-white'>
              Rate (Amount)
            </Typography>
            <input
              type='text'
              placeholder='Enter Rate'
              className='justify-center items-start bg-transparent w-full px-3 py-3.5 mt-2 rounded border border-gray-700 border-solid text-stone-300 max-md:pr-5'
            />
          </div>
          <div>
            <Typography variant='h6' className='text-white'>
              Total Amount
            </Typography>
            <input
              type='text'
              placeholder='Enter Total Amount'
              className='justify-center items-start bg-transparent w-full px-3 py-3.5 mt-2 rounded border border-gray-700 border-solid text-stone-300 max-md:pr-5'
            />
          </div>
          <div>
            <Typography variant='h6' className='text-white '>
              Select Plan Validity
            </Typography>
            <div className='border  rounded-md  text-white border-gray-700 border-solid bg-secondary__fill w-full h-2.6 mt-2'>
              <Dropdown className='h-full w-full' />
            </div>
          </div>
          <div>
            <Typography variant='h6' className='text-white '>
              Select Plan Status
            </Typography>
            <div className='border  rounded-md  text-white border-gray-700 border-solid bg-secondary__fill w-full h-2.6 mt-2'>
              <Dropdown className='h-full w-full' />
            </div>
          </div>
        </div>
        <button className='justify-center self-center px-7 py-3 mt-8 text-base text-center whitespace-nowrap bg-white rounded-lg text-slate-900 max-md:px-5'>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditPlan;
