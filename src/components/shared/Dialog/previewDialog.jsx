import { Typography } from '@mui/material';
import React from 'react';

const PreviewDialog = ({
  heading,
  title,
  subTitle,
  previewImage,
  successNumber,
  description,
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-20 text-start'>
      <div className='bg-secondary__fill w-42.6 rounded-xl border border-gray-700 border-solid p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-white text-lg'>{heading}</h2>
          <button
            className='text-white text-xl'
            onClick={onClose}
            aria-label='Close'
          >
            &times;
          </button>
        </div>
        <div className='border-b border-gray-700 mb-4'></div>
        <img
          className='w-full rounded-xl mb-4'
          src={previewImage}
          alt='Preview Image'
        />
        <div className='mb-4'>
          <div className='justify-center w-12 text-center px-2 py-1 mt-5 text-sm font-semibold text-success bg-success whitespace-nowrap bg-green-500 bg-opacity-20 rounded-full inline-block'>
            {successNumber}
          </div>
        </div>
        <div className='text-white mb-5'>
          <div>
            <Typography variant='h5' className='text-lg'>
              {title}
            </Typography>
          </div>
          <div className='mt-2'>
            <Typography variant='h6' className='text-grey__primary__light '>
              {subTitle}
            </Typography>
          </div>
        </div>
        <Typography variant='cardDescription' className='text-white '>
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewDialog;
