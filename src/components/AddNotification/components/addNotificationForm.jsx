import React from 'react';
import { Icon } from '@iconify/react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import RichTextEditor from '../../shared/RichTextEditor';

const AddNotificationForm = () => {
  return (
    <div>
      <div className='flex flex-col justify-center p-8 rounded-xl border border-gray-700 border-solid bg-secondary__fill max-md:px-5'>
        <div className='max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            {/* Left Div */}
            <div className='flex flex-col w-[23%] max-md:ml-0 max-md:w-full h-full'>
              <div className='flex flex-col justify-center items-center px-12 w-full rounded-3xl border border-gray-700 border-solid aspect-square bg-secondary__fill max-md:px-5 max-md:mt-8 h-full'>
                <div className='flex justify-center items-center px-16 py-16 rounded-full border border-white border-dashed max-md:px-5'>
                  <span className='text-white  aspect-square '>
                    <UploadFileIcon style={{ fontSize: '3em' }} />
                  </span>
                </div>
              </div>
            </div>
            {/* Right Div */}
            <div className='flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full h-full'>
              <div className='flex flex-col grow max-md:mt-8 max-md:max-w-full h-full'>
                <div className='text-sm text-left text-white max-md:max-w-full'>
                  Title
                </div>
                <input
                  type='text'
                  placeholder=' Enter Title'
                  className='justify-center bg-secondary__fill items-start px-3 py-3 mt-2 text-sm leading-5 rounded border border-gray-700 border-solid text-stone-300 max-md:pr-5 max-md:max-w-full'
                />
                <div className='mt-8 text-sm text-white text-left max-md:max-w-full'>
                  Description
                </div>
                <div className='flex flex-col mt-2 rounded border border-gray-700 border-solid max-md:max-w-full grow'>
                  <RichTextEditor />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className='flex items-center gap-2.5 px-4 py-2.5 mt-8 float-right text-base text-center bg-white rounded-lg text-secondary__fill'
        // onClick={handleaddnotification}
      >
        <Icon icon='fluent:add-circle-20-regular' />
        <span className='my-auto'>Add Notification</span>
      </button>
    </div>
  );
};

export default AddNotificationForm;
