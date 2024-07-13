import React from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import SelectAdminCard from './selectAdminCard';

const SelectAdminDialog = ({
  isOpen,
  onClose,
  data,
  searchInputValue,
  selectAllAdmin,
  handleSearchInputChange,
  handleSearchClick,
  selectedCount,
  saveSelectedStudents,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 text-start'>
        <div className='absolute rounded-lg bg-secondary__fill overflow-x-hidden p-4 w-[50%]'>
          <div className='flex justify-between text-white'>
            <h1 className='text-xl my-3'>Select Student</h1>
            <span onClick={onClose} className='pr-3 mt-3'>
              <IoCloseOutline style={{ fontSize: '2rem' }} />
            </span>
          </div>
          <div className='mt-3 overflow-y-scroll'>
            <div className='bg-secondary__fill rounded-md border border-gray-700 p-4 h-24 flex mr-2 w-[98.7%]'>
              <div className='flex overflow-x-hidden'>
                <input
                  key={7}
                  onChange={handleSearchInputChange}
                  value={searchInputValue}
                  className='p-2 rounded-sm text-white w-80 mt-4 opacity-45 h-8 bg-blue'
                  type='text'
                  placeholder=' Search Name, Enrollment, Standard'
                />
                <span
                  onClick={handleSearchClick}
                  className='p-2 pl-2 mt-4 bg-opacity-45 rounded-sm text-white m-2 h-8 w-10 bg-blue'
                >
                  <MdOutlineSegment />
                </span>
              </div>
              <div className='mt-4 flex'>
                <div
                  onClick={selectAllAdmin}
                  className='flex text-sm p-1 text-white border mr-10 pl-3 border-gray-700 border-solid bg-secondary__fill h-8 w-24 rounded-md'
                >
                  <button>Select All</button>
                </div>
                <h1 className='text-white mr-10 mt-1 text-sm'>
                  {selectedCount} Selected
                </h1>
                <div
                  onClick={saveSelectedStudents}
                  className='flex p-1 text-sm bg-white pl-3 h-8 w-16 rounded-md'
                >
                  <button>Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap w-[125%] gap-4 mt-3'>
            <SelectAdminCard data={data.filter(item => item.isChecked)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectAdminDialog;
