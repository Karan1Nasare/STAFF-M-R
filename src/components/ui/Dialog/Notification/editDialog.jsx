import React, { useState } from 'react';

import { Icon } from '@iconify/react';

import AnnouncementImage from '../../../../assets/announcement_card.png';
import RichTextEditor from '../../../shared/RichTextEditor';

const EditDialogCard = ({ heading, isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-20 text-start'>
      <div className='flex flex-col px-8 py-7 rounded-3xl border border-gray-700 border-solid text-start bg-secondary__fill max-w-[673px] max-md:px-5'>
        <div className='flex gap-5 text-xl text-white max-md:flex-wrap max-md:max-w-full'>
          <div className='flex-auto my-auto '>{heading}</div>
          <Icon
            icon={'material-symbols-light:close'}
            className='text-white'
            onClick={onClose}
          />
        </div>
        <div className='shrink-0 items-center h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
        <div className='flex overflow-hidden relative rounded flex-col justify-center items-center px-20 pt-11 pb-20 mt-11 text-base text-center text-white whitespace-nowrap min-h-[158px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <img
              loading='lazy'
              src={AnnouncementImage}
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

        <div className='mt-5 flex flex-col text-sm max-w-[613px]'>
          <div className='w-full text-white max-md:max-w-full'>Title</div>
          <input
            type='text'
            placeholder='Enter Title'
            className='justify-center px-3 py-3 mt-2 rounded border border-gray-700 border-solid leading-[143%] text-ellipsis text-stone-300 bg-secondary__fill max-md:max-w-full'
          />
        </div>

        <div className='mt-5 text-sm text-white max-md:max-w-full'>
          Description
        </div>
        <div className='mt-2'>
          <RichTextEditor />
        </div>

        <button className='justify-center self-center px-7 py-3 mt-8 text-base text-center whitespace-nowrap bg-white rounded-lg text-slate-900 max-md:px-5'>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditDialogCard;
