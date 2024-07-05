import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import RichTextEditor from '../shared/RichTextEditor';
import { useStore } from '../../store/context-store';
import ArrowRight from '../../assets/icon/Arrow Right.svg';
import {
  FormProvider,
  RHFCustomSelect,
  RHFRichTextEditor,
  RHFSelect,
  RHFTextField,
} from '../../hooks/hook-form';
import MenuItem from '../shared/menuitem/MenuItem';
import './styles/addQuestionBank.css';
import useDefaultStdOption from '../../hooks/getDefaultStdOption';
import useContent from '../Material/hooks/useContent';

const AddQuestionsInfo = props => {
  const [Store, StoreDispatch] = useStore();
  const [textEditor, setEditor] = useState('');
  const {
    questionForm,
    activeTab,
    setActiveTab,
    questionFormSubmit,
    handlePreviousTab,
  } = props;

  const { handleSubmit, getValues } = questionForm;
  const { standard, chapter, subject } = getValues();

  const {
    courseOptions,
    subjectOptions,
    chapterOptions,
    topicOptions,
    selectedCourse,
    selectedSubject,
    selectedChapter,
    setSelectedCourse,
    setSelectedSubject,
    setSelectedChapter,
    fetchSubjectOptions,
    fetchChapterOptions,
    fetchTopicOptions,
  } = useDefaultStdOption({ standard, chapter, subject });
  useEffect(() => {
    if (selectedCourse) {
      fetchSubjectOptions(selectedCourse);
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedSubject) {
      fetchChapterOptions(selectedCourse, selectedSubject);
    }
  }, [selectedSubject, selectedCourse]);

  useEffect(() => {
    if (selectedChapter) {
      fetchTopicOptions(selectedCourse, selectedSubject, selectedChapter);
    }
  }, [selectedChapter, selectedCourse, selectedSubject]);

  const onSubmit = () => {
    setActiveTab(activeTab + 1);
  };

  function handleTextEditChange(value) {
    setEditor(value);
  }

  return (
    <div className='w-full max-w-screen mx-auto text-white'>
      <FormProvider methods={questionForm} onSubmit={handleSubmit(onSubmit)}>
        <div className='p-8 rounded-md mt-6 border border-gray-700 h-[70%] w-full max-w-screen mx-auto bg-secondary__fill'>
          <h3 className='mb-2 text-left'>
            Exam Title&nbsp;<span className='text-danger'>*</span>
          </h3>
          <div className='flex'>
            <RHFTextField
              className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
              placeholder='Enter Exam Title'
              name='examTitle'
              defaultValue=''
            />
          </div>
          <h3 className='mt-6 mb-2 text-left'>Description</h3>
          <div className=' border rounded-md w-full max-w-screen mx-auto border-gray-700'>
            <RichTextEditor
              name='description'
              placeholder={'Enter Description'}
              onChange={handleTextEditChange}
              value={textEditor}
            />
          </div>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mt-6 mb-2 text-left'>
                Select Standard&nbsp;<span className='text-danger'>*</span>
              </h1>
              <div>
                <RHFTextField
                  select
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                  }}
                  name='standard'
                  control={questionForm.control}
                  // onChange={e => setSelectedCourse(e.target.value)}
                >
                  <MenuItem value='' disabled>
                    Select Standard
                  </MenuItem>
                  {courseOptions?.map((option, i) => (
                    <MenuItem key={i} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </RHFTextField>
              </div>
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mt-6 mb-2 text-left'>
                Select Subject&nbsp;<span className='text-danger'>*</span>
              </h1>
              <div>
                <RHFTextField
                  select
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                  }}
                  name='subject'
                  control={questionForm.control}
                  // onChange={e => setSelectedSubject(e.target.value)}
                >
                  <MenuItem value='' disabled>
                    Select Subject
                  </MenuItem>
                  {subjectOptions?.map((option, i) => (
                    <MenuItem key={i} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </RHFTextField>
              </div>
            </div>
          </div>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mt-6 mb-2 text-left'>
                Select Chapter&nbsp;<span className='text-danger'>*</span>
              </h1>
              <div>
                <RHFTextField
                  select
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                  }}
                  name='chapter'
                  control={questionForm.control}
                  // onChange={e => setSelectedChapter(e.target.value)}
                >
                  <MenuItem value='' disabled>
                    Select Chapter
                  </MenuItem>
                  {chapterOptions?.map((option, i) => (
                    <MenuItem key={i} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </RHFTextField>
              </div>
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mt-6 mb-2 text-left'>
                Select Topic&nbsp;<span className='text-danger'>*</span>
              </h1>
              <div>
                <RHFTextField
                  select
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                  }}
                  name='topic'
                  control={questionForm.control}
                >
                  <MenuItem value='' disabled>
                    Select Topic
                  </MenuItem>
                  {topicOptions?.map((option, i) => (
                    <MenuItem key={i} value={option.id}>
                      {option.title}
                    </MenuItem>
                  ))}
                </RHFTextField>
              </div>
            </div>
          </div>
        </div>
        <div className='flex 2xl:w-[100%] mt-8 lg:w-[100%] justify-between'>
          <button
            className='rounded-md flex justify-center bg-white w-24 h-8 text-black hover:bg-primary hover:text-white'
            onClick={handlePreviousTab}
            type='button'
          >
            <img className='mt-[7%] mr-1 rotate-180' src={ArrowRight} alt='' />
            <h3 className='mt-1'>Previous</h3>
          </button>
          <button
            className='rounded-md flex justify-center bg-white w-24 h-8 text-black ml-auto hover:bg-primary hover:text-white'
            type='submit'
            ref={questionFormSubmit}
          >
            <h3 className='mt-1 mr-1'>Next</h3>
            <img className='mt-[7%]' src={ArrowRight} alt='' />
          </button>
        </div>
      </FormProvider>
    </div>
  );
};

export default AddQuestionsInfo;
