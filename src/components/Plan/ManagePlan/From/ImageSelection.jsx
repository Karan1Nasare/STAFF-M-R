import { Button, Stack, Typography } from '@mui/material';
import { FiTrash2 } from 'react-icons/fi';
import React, { useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import FileUploaderImage from '../../../ui/Form/FileUploaderImage';

const ImageSelection = ({ file, setFile }) => {
  const [selectFile, setSelection] = useState(false);
  const [removeFile, setRemoveSelection] = useState(false);
  return (
    <div className='text-sm w-full font-medium text-center bg-[#0B1739] text-gray-500 border border-bright__grey  p-7 rounded-md flex items-center justify-between'>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ width: '100%' }}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={5}
          sx={{ flex: 1 }}
        >
          <Stack sx={{ maxWidth: '240px', width: '100%' }}>
            <FileUploaderImage
              setFile={setFile}
              selectFile={selectFile}
              removeFile={removeFile}
              setRemoveSelection={setRemoveSelection}
              setSelection={setSelection}
            />
          </Stack>

          <Stack>
            <p className='text-lg  text-white text-left'>
              Upload Your Plan Image
            </p>
            <p className='text-sm font-normal text-[#98A4AE]'>
              Allowed JPG, GIF or PNG. Max size of 800K{' '}
            </p>
          </Stack>
        </Stack>
        <Stack
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={5}
        >
          <button
            onClick={() => setSelection(true)}
            className='btn flex flex-row justify-center items-center gap-2 bg-white'
          >
            <RiImageAddFill />
            Choose File
          </button>
          <button
            onClick={() => setRemoveSelection(true)}
            className='btn bg-[rgba(255,102,146,0.2)] flex flex-row justify-center items-center gap-2 text-red-900'
          >
            <FiTrash2 className='text-red-600 cursor-pointer' />
            Remove
          </button>
        </Stack>
      </Stack>
    </div>
  );
};

export default ImageSelection;
