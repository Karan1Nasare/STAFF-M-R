/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDropzone } from 'react-dropzone';
import ReactPlayer from 'react-player/file';
import './styles.css';
import { FaPlay } from 'react-icons/fa';
import { Typography } from '@mui/material';

const UploadVideo = ({ onDrop, isUpload }) => {
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mpeg'],
    },
    multiple: false,
  });

  return (
    <div className='relative h-[208px] cursor-pointer bg-transparent flex justify-center items-center rounded-md'>
      <svg className='absolute top-0 left-0 w-full h-full'>
        <rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill='none'
          stroke='white'
          strokeDasharray='9 9'
          strokeWidth='2'
          rx='6'
          ry='6'
        />
      </svg>
      <div className='relative z-10 w-full h-full flex justify-center items-center'>
        {isUpload ? (
          <ReactPlayer
            url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            playing={true}
            controls={true}
            width='100%'
            height='100%'
          />
        ) : (
          <div
            {...getRootProps()}
            className='h-full w-full flex justify-center items-center'
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <div className='flex flex-col items-center justify-center h-full'>
                <FaPlay size={30} style={{ marginBottom: '20px' }} />
                <p>
                  <Typography variant='thumbnailContentPlaceholder'>
                    Upload Thumbnail Video
                  </Typography>
                </p>
                <Typography variant='thumbnailContentPlaceholder'>
                  Max File Size 50 MB
                </Typography>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadVideo;
