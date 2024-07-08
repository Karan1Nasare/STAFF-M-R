import React, { useEffect, useState } from 'react';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { RiArrowDropDownLine } from 'react-icons/ri';
import { CircularProgress } from '@mui/material';
import RichTextEditor from '../../shared/RichTextEditor';
import { useStore } from '../../../store/context-store';
import ArrowRight from '../../../assets/icon/Group 38.svg';
import Dropdown from '../../shared/DropDown';
import { RHFSelect, RHFTextField } from '../../../hooks/hook-form';
import Button from '../../shared/buttons/Button';

const AddExamBasicDetails = ({
  setNextClick,
  setPrevClick,
  courses,
  subjects,
  setValue,
  isLoading,
}) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    setValue('description', description);
  }, [description]);

  return (
    <div className='w-full max-w-screen mx-auto'>
      <div className='flex mr-6 justify-between'>
        <div className='flex text-white'>
          <div className='border-r border-2 border-primary mr-2 h-7' />
          <h1 className='text-lg text-white text-left'>Create Exam Paper</h1>
        </div>
        <div className='flex'>
          <div className='flex w-16 mr-8 bg-white h-11 justify-center rounded-md'>
            <button type='submit'>
              {isLoading ? (
                <CircularProgress
                  size={'small'}
                  sx={{ width: '25px !important', height: '25px !important' }}
                />
              ) : (
                'Save'
              )}
              {/* Save */}
            </button>
          </div>
          <div className='flex text-white'>
            <img
              src={ArrowRight}
              style={{
                marginRight: '0.5rem',
              }}
            ></img>
            <h2
              className='mt-2 text-lg'
              onClick={() => {
                setPrevClick(false);
                setNextClick(true);
              }}
            >
              Back
            </h2>
          </div>
        </div>
      </div>
      <div className='text-white'>
        <div className='p-8 rounded-md mt-6 border border-gray-700 h-[70%] w-full max-w-screen mx-auto bg-secondary__fill'>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mb-2 text-left'>Select Standard</h1>
              <RHFSelect
                name={'course_id'}
                options={courses.map(course => ({
                  value: course.id,
                  label: course.name,
                }))}
                required
              />
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mb-2 text-left'>Select Subject</h1>
              <RHFSelect
                name={'subject_id'}
                options={subjects.map(course => ({
                  value: course.id,
                  label: course.name,
                }))}
                required
              />
            </div>
          </div>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mt-6 mb-2 text-left'>Exam Paper Name</h1>
              <RHFTextField
                name={'paper_name'}
                placeholder='Exam Paper Name'
                required
              />
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mt-6 mb-2 text-left'>Total Mark</h1>
              <RHFTextField
                name={'total_marks'}
                type='number'
                placeholder={'Total Marks'}
                required
              />
            </div>
          </div>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mt-6 mb-2 text-left'>Exam Duration</h1>
              <RHFTextField
                name={'duration'}
                placeholder='Exam Duration'
                required
                type='number'
              />
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mt-6 mb-2 text-left'>Exam Date</h1>
              <RHFTextField
                name={'exam_date'}
                type='date'
                placeholder={'Total Marks'}
                required
              />
            </div>
          </div>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mt-6 mb-2 text-left'>Exam Start Time</h1>
              <RHFTextField
                name={'start_time'}
                placeholder='Exam Start Time'
                required
                type='time'
              />
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mt-6 mb-2 text-left'>Exam End Time</h1>
              <RHFTextField
                name={'end_time'}
                type='time'
                placeholder={'Exam End Time'}
                required
              />
            </div>
          </div>
          <h3 className='mt-6 mb-2 text-left'>Description</h3>
          <div className=' border rounded-md w-full max-w-screen mx-auto border-gray-700'>
            <RichTextEditor value={description} onChange={setDescription} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddExamBasicDetails;
