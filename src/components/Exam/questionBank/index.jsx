/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
import moment from 'moment/moment';
import { useFieldArray, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Header from './header';
import QuestionBank from './questionBank';
import useFetcher from '../../../hooks/useFetcher';
import axiosInstance from '../../../utilities/axios-client';
import URLS from '../../../constants/api';
import CreateExamPaper from '../createExamPaper/index';
import AddExamBasicDetails from '../addExamBasicDetails/addExamBasicDetails';
import { FormProvider } from '../../../hooks/hook-form';
import {
  createExamApi,
  createExamPaper,
  getAllCourseData,
} from '../../services/exam';

const Index = () => {
  const { fetcher, getExecutorState } = useFetcher();
  const [examcards, setExamcards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextClick, setNextClick] = useState(false);
  const [prevClick, setPrevClick] = useState(false);
  const [questionBanks, setQuestionBanks] = useState([]);
  const [questionBankIds, setQuestionBankIds] = useState([]);
  const [SelectedQuestionBank, setSelectedQuestionBank] = useState([]);
  const [QuestionsList, setQuestionList] = useState([]);
  const [checkBoxStates, setCheckBoxStates] = useState([]);
  const [courses, setCourses] = useState([]);
  const [subject, setSubject] = useState([]);
  const isLoading =
    getExecutorState('create_exam').isLoading ||
    getExecutorState('create_exam_paper').isLoading;

  const handlePageChange = (event, page) => {
    setCurrentPage(page); // Update current page when page changes
    fetcher({
      key: 'getquestions_with_page',
      executer: () =>
        axiosInstance.get(`${URLS.GET_QUESTION_BANK()}`, { params: { page } }),
      onSuccess: ({ data: res }) => {
        setExamcards(res.data);
        setQuestionBanks(res?.data?.data);
      },
    });
  };

  useEffect(() => {
    fetcher({
      key: 'getquestions',
      executer: () =>
        axiosInstance.get(`${URLS.GET_QUESTION_BANK()}`, { params: {} }),
      onSuccess: ({ data: res }) => {
        setExamcards(res.data);
        setQuestionBanks(res?.data?.data);
      },
    });
  }, []);

  const questionListByQuestionIds = questionBankIds => {
    setQuestionList([]);
    SelectedQuestionBank?.forEach(bank => {
      if (questionBankIds.includes(bank.id)) {
        setQuestionList(prev => [...prev, ...bank.question_bank_details]);
      }
    });
  };

  useEffect(() => {
    questionListByQuestionIds(questionBankIds);
  }, [questionBankIds, SelectedQuestionBank]);

  const handleChange = (e, question) => {
    if (e.target.checked) {
      setCheckBoxStates(prevStates => [...prevStates, question?.id]);
    } else {
      setCheckBoxStates(prevStates =>
        prevStates.filter(id => id !== question?.id),
      );
    }
  };
  const handleselectall = () => {
    if (checkBoxStates.length === examcards.data.length) {
      setCheckBoxStates([]);
    } else {
      setCheckBoxStates(examcards.data.map(card => card.id));
    }
  };

  const methods = useForm();
  const { formState, setValue, watch, handleSubmit, control } = methods;
  const selectedQuestion = useFieldArray({
    control,
    name: 'selectedQuestion',
  });

  useEffect(() => {
    if (questionBankIds && questionBankIds.length) {
      setSelectedQuestionBank(
        questionBanks.filter(bank => questionBankIds.includes(bank.id)),
      );
    }
    setValue('question_banks_ids', questionBankIds);
  }, [questionBankIds]);

  const onSubmit = data => {
    const createExamPaperData = {
      course_id: data.course_id,
      subject_id: data.subject_id,
      paper_name: data.paper_name,
      total_marks: data.total_marks,
      description: data.description,
      questions: data.question_ids,
    };

    const createExamData = {
      course_id: data.course_id,
      subject_id: data.subject_id,
      exam_paper_id: '', // Placeholder, will be updated later
      exam_title: data.paper_name,
      description: data.description,
      duration: data.duration,
      number_of_questions: data.question_ids?.length,
      total_marks: data.total_marks,
      exam_date: moment(data.exam_date, 'YYYY-MM-DD').unix(),
      start_time: data.start_time,
      end_time: data.end_time,
    };

    // First API call to create the exam paper
    fetcher({
      key: 'create_exam_paper',
      executer: () => createExamPaper(createExamPaperData),
      onSuccess: response => {
        const examPaper = response.data.data;
        if (examPaper) {
          createExamData.exam_paper_id = examPaper.id;
          fetcher({
            key: 'create_exam',
            executer: () => createExamApi(createExamData),
            onFailure: err => {
              console.debug('Error creating exam:', err);
            },
            onSuccessRoute: '/exam',
            showSuccessToast: true,
            showFailureToast: false,
          });
        }
      },
      onFailure: err => {
        console.debug('Error creating exam paper:', err);
      },
      showSuccessToast: false,
      showFailureToast: false,
    });
  };
  const values = watch();

  const fetchCourses = () => {
    fetcher({
      key: 'course_list',
      executer: () => getAllCourseData(),
      onSuccess: response => {
        const fetchedCourses = response?.data?.data || [];
        setCourses(Array.isArray(fetchedCourses) ? fetchedCourses : []);
      },
      showSuccessToast: false,
      showFailureToast: false,
    });
  };

  const fetchSubject = () => {
    fetcher({
      key: 'subject_list',
      executer: () => getAllCourseData({ course_id: values?.course_id }),
      onSuccess: response => {
        const fetchedCourses = response?.data?.data || [];
        setSubject(Array.isArray(fetchedCourses) ? fetchedCourses : []);
      },
      showSuccessToast: false,
      showFailureToast: false,
    });
  };

  useEffect(() => {
    if (values?.course_id) {
      fetchSubject();
    }
  }, [values?.course_id]);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (values?.filter_question_bank) {
      questionListByQuestionIds([values.filter_question_bank]);
    } else {
      questionListByQuestionIds(questionBankIds);
    }
  }, [values?.filter_question_bank]);

  console.debug('QuestionsList', QuestionsList);

  return (
    <div>
      {!nextClick && !prevClick && (
        <Header
          setNextClick={setNextClick}
          nextClick={nextClick}
          checkBoxStates={checkBoxStates}
          handleselectall={handleselectall}
          values={values}
        />
      )}

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {nextClick && !prevClick && (
          <CreateExamPaper
            setNextClick={setNextClick}
            QuestionsList={QuestionsList}
            setPrevClick={setPrevClick}
            setValue={setValue}
            selectedQuestion={selectedQuestion}
            SelectedQuestionBank={SelectedQuestionBank}
            values={values}
          />
        )}

        {prevClick && !nextClick && (
          <AddExamBasicDetails
            setNextClick={setNextClick}
            setPrevClick={setPrevClick}
            setValue={setValue}
            courses={courses}
            subjects={subject}
            isLoading={isLoading}
          />
        )}
      </FormProvider>
      {!nextClick && !prevClick && (
        <QuestionBank
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handlePageChange={handlePageChange}
          examcards={examcards}
          setQuestionBankIds={setQuestionBankIds}
          handleChange={handleChange}
          checkBoxStates={checkBoxStates}
          SelectedQuestionBank={SelectedQuestionBank}
          setExamcards={setExamcards}
          setQuestionBanks={setQuestionBanks}
        />
      )}
    </div>
  );
};

export default Index;
