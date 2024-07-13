import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className='bg-darkBlue p-6 rounded-lg shadow-lg flex items-center justify-between'>
      <div className='flex items-center'>
        <div className='border-2 border-dashed border-gray-300 rounded-lg p-4 w-48 h-32 flex items-center justify-center relative'>
          {selectedFile ? (
            <div className='flex flex-col items-center justify-center w-full h-full'>
              <div className='flex items-center justify-between w-full mb-2'>
                <div className='flex items-center'>
                  <ImageIcon style={{ color: 'green' }} />
                  <p className='text-white ml-2'>{selectedFile.name}</p>
                </div>
                <IconButton size='small' onClick={handleRemoveFile}>
                  <CloseIcon className='text-white' />
                </IconButton>
              </div>
              <Button
                variant='text'
                startIcon={<VisibilityIcon />}
                className='text-white mt-2'
                sx={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Preview
              </Button>
            </div>
          ) : (
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <UploadFileIcon style={{ fontSize: '3rem', color: 'white' }} />
              <input type='file' hidden onChange={handleFileChange} />
            </label>
          )}
          <input type='file' hidden onChange={handleFileChange} />
        </div>
        <div className='ml-4 text-start'>
          <p className='text-white text-lg'>Upload Your Banner</p>
          <p className='text-gray-400 text-sm'>
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>
      <div className='flex items-center'>
        <label className='flex items-center h-12 px-4 py-2 bg-white text-black rounded cursor-pointer hover:bg-gray-200 transition-colors duration-200 mr-2'>
          <UploadFileIcon className='mr-2 text-xl' />
          Choose File
          <input type='file' hidden onChange={handleFileChange} />
        </label>

        <button
          onClick={handleRemoveFile}
          className='flex items-center h-12 px-4 py-2 bg-delete text-delete bg-opacity-20 rounded  transition-colors duration-200 mr-2'
        >
          <DeleteIcon className='mr-2 text-xl' />
          Remove
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
