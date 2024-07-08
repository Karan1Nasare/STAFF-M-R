import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, styled } from '@mui/material';
import {
  FormProvider, // Import FormProvider
  RHFSelect, // Import RHFSelect
  RHFTextField, // Import RHFTextField
} from '../../../hooks/hook-form';
import Cards from './cards';
import useFetcher from '../../../hooks/useFetcher';
import axiosInstance from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const CustomBox = styled(Box)(({ theme, disabled }) => ({
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
  color: disabled ? theme.palette.text.disabled : theme.palette.text.primary,
}));
const QuestionBank = ({
  currentPage,
  setCurrentPage,
  handlePageChange,
  examcards,
  setQuestionBankIds,
  handleChange,
  checkBoxStates,
  SelectedQuestionBank,
  setExamcards,
  setQuestionBanks,
}) => {
  const { fetcher } = useFetcher();
  const methods = useForm();
  const [coursedata, setCoursedata] = useState([]);
  const [standarddata, setStandarddata] = useState([]);
  const [subjectdata, setSubjectdata] = useState([]);
  const courseoptions = coursedata?.map(({ id, name }) => {
    return { label: name, value: id };
  });
  const standardoptions = standarddata?.map(({ id, name }) => {
    return { label: name, value: id };
  });
  const subjectoptions = subjectdata?.map(({ id, name }) => {
    return { label: name, value: id };
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async data => {
    console.log('nfjrkfjkttfjktnrf');
  };
  const handleAddQuestionBankClick = () => {
    console.log('Select Standard');
  };
  useEffect(() => {
    fetcher({
      key: 'getallcoursedata',
      executer: () => axiosInstance.get(`${URLS.GET_ALL_COURSESDATA()}`),
      onSuccess: ({ data: res }) => {
        setCoursedata(res.data);
      },
    });
  }, []);
  useEffect(() => {
    const subscription = watch(async (value, { name, type }) => {
      if (name === 'course_id') {
        setStandarddata([]);
        setSubjectdata([]);
        fetcher({
          key: 'getallcoursedata',
          executer: () =>
            axiosInstance.get(`${URLS.GET_ALL_COURSESDATA()}`, {
              params: { course_id: value?.course_id },
            }),
          onSuccess: ({ data: res }) => {
            setStandarddata(res.data);
          },
        });
        fetcher({
          key: 'getquestions',
          executer: () =>
            axiosInstance.get(`${URLS.GET_QUESTION_BANK()}`, {
              // params: { course_id: value?.course_id },
            }),
          onSuccess: ({ data: res }) => {
            setExamcards(res.data);
            setQuestionBanks(res?.data?.data);
          },
        });
      }
      if (name === 'subject_id') {
        setSubjectdata([]);
        fetcher({
          key: 'getallcoursedata',
          executer: () =>
            axiosInstance.get(`${URLS.GET_ALL_COURSESDATA()}`, {
              params: {
                course_id: value?.course_id,
                subject_id: value?.subject_id,
              },
            }),
          onSuccess: ({ data: res }) => {
            setSubjectdata(res.data);
          },
        });
        fetcher({
          key: 'getquestions',
          executer: () =>
            axiosInstance.get(`${URLS.GET_QUESTION_BANK()}`, {
              params: {
                // course_id: value?.course_id,
                // subject_id: value?.subject_id,
              },
            }),
          onSuccess: ({ data: res }) => {
            setExamcards(res.data);
            setQuestionBanks(res?.data?.data);
          },
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='2xl:grid 2xl:grid-cols-4 2xl:gap-2 2xl:w-2/3 xl:grid xl:grid-cols-4 xl:gap-2 lg:grid lg:grid-cols-4 lg:gap-2 md:grid md:grid-cols-2 md:gap-2'>
          <RHFSelect
            size='small'
            name='course_id'
            placeholder='Select Course'
            options={courseoptions || []}
          />
          <CustomBox disabled={standardoptions?.length === 0}>
            <RHFSelect
              size='small'
              name='subject_id'
              placeholder='Select Subject'
              options={standardoptions || []}
            />
          </CustomBox>
          <CustomBox disabled={subjectoptions?.length === 0}>
            <RHFSelect
              size='small'
              name='chapter_id'
              placeholder='Select Chapter'
              options={subjectoptions || []}
            />
          </CustomBox>
        </div>
      </FormProvider>
      <Cards
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handlePageChange={handlePageChange}
        examcards={examcards}
        handleSelectQuestion={setQuestionBankIds}
        handleChange={handleChange}
        checkBoxStates={checkBoxStates}
        SelectedQuestionBank={SelectedQuestionBank}
      />
    </div>
  );
};

export default QuestionBank;
