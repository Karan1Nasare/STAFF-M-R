/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormProvider, // Import FormProvider
  RHFSelect, // Import RHFSelect
  RHFTextField, // Import RHFTextField
} from '../../../hooks/hook-form';
import Group38 from '../../../assets/icon/Group 38.svg';
import AddExamBasicDetails from '../addExamBasicDetails/index';
import Button from '../../shared/buttons/Button';

const Header = ({
  setNextClick,
  setPrevClick,
  SelectedQuestionBank,
  values,
}) => {
  const [previewClick, setPrevieWClick] = useState(false);

  const handleBackClick = () => {
    setNextClick(false);
  };
  const handlePreviewClick = () => {
    setPrevClick(true);
    setNextClick(false);
  };

  return (
    <div>
      <div className='mt-4 overflow-x-hidden'>
        <div className='flex mr-6 justify-between'>
          <div className='flex text-white'>
            <div className='border-r border-2 border-primary mr-2 h-7' />
            <h1 className='text-lg text-white text-left'>Create Exam Paper</h1>
          </div>
          <div
            onClick={handleBackClick}
            className='flex text-white cursor-pointer'
          >
            <img
              src={Group38}
              style={{
                marginRight: '0.5rem',
              }}
            ></img>
            <h2 className='mt-[3%]'>Back</h2>
          </div>
        </div>
        <div className=' bg-secondary__fill my-6 border p-8 w-full 2xl:h-6.5 flex justify-between max-w-screen mx-auto border-gray-700 rounded-xl'>
          <div className='flex'>
            <input
              className='p-2 w-80 h-11 mr-3 bg-secondary__fill__dark rounded-md text-white text-sm'
              type='text'
              placeholder=' Search Name, Innrollment, Standard'
            />
            <RHFSelect
              size='small'
              name='filter_question_bank'
              options={[
                { label: 'ALL', value: '' },
                ...SelectedQuestionBank?.map(questionBank => ({
                  label: questionBank.title,
                  value: questionBank.id,
                })),
              ]}
            />
          </div>
          <div className='flex'>
            <Button
              variant='contain'
              sx={{ background: 'white' }}
              disabled={
                !(values?.question_ids && values?.question_ids?.length > 0)
              }
              onClick={handlePreviewClick}
            >
              Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
