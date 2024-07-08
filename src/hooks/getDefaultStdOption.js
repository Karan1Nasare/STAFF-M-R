import { useCallback, useEffect, useState } from 'react';
import axiosInstance from '../utilities/axios-client';
import URLS from '../constants/api';
import useFetcher from './useFetcher';

const useDefaultStdOption = ({
  standard = '',
  subject = '',
  chapter = '',
} = {}) => {
  console.log('standard, chapter, subject', standard, chapter, subject);
  const { fetcher } = useFetcher();
  const [courseOptions, setCourseOptions] = useState([]);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [chapterOptions, setChapterOptions] = useState([]);
  const [topicOptions, setTopicOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(standard);
  const [selectedSubject, setSelectedSubject] = useState(subject);
  const [selectedChapter, setSelectedChapter] = useState(chapter);
  const [selectedTopic, setSelectedTopic] = useState('');

  const getOptions = async (courseId, subjectId, chapterId) => {
    const url = URLS.GET_MATERIAL_OPTION(courseId, subjectId, chapterId);
    return axiosInstance.get(url);
  };

  const fetchCourseOptions = useCallback(() => {
    fetcher({
      key: 'get-course-options',
      executer: () => getOptions(),
      showSuccessToast: false,
      onSuccess: response => {
        setCourseOptions(response?.data?.data || []);
        setSelectedCourse('');
      },
    });
  }, []);

  const fetchSubjectOptions = useCallback(courseId => {
    if (!courseId) return;
    fetcher({
      key: 'get-course-subject-options',
      executer: () => getOptions(courseId),
      showSuccessToast: false,
      onSuccess: response => {
        setSubjectOptions(response?.data?.data || []);
        setSelectedSubject('');
      },
    });
  }, []);

  const fetchChapterOptions = useCallback((courseId, subjectId) => {
    if (!courseId || !subjectId) return;
    fetcher({
      key: 'get-subject-chapter-options',
      executer: () => getOptions(courseId, subjectId),
      showSuccessToast: false,
      onSuccess: response => {
        setChapterOptions(response?.data?.data || []);
        setSelectedChapter('');
      },
    });
  }, []);

  const fetchTopicOptions = useCallback((courseId, subjectId, chapterId) => {
    if (!courseId || !subjectId || !chapterId) return;
    fetcher({
      key: 'get-chapter-topic-options',
      executer: () => getOptions(courseId, subjectId, chapterId),
      showSuccessToast: false,
      onSuccess: response => {
        setTopicOptions(response?.data?.data || []);
        setSelectedTopic('');
      },
    });
  }, []);

  useEffect(() => {
    fetchCourseOptions();
  }, []);

  useEffect(() => {
    console.log('in standard');
    if (standard) fetchSubjectOptions(standard);
  }, [standard]);

  useEffect(() => {
    console.log('in subject');
    if (standard && subject) fetchChapterOptions(standard, subject);
  }, [subject, standard]);

  useEffect(() => {
    console.log('in chapter');
    if (standard && subject && chapter)
      fetchTopicOptions(standard, subject, chapter);
  }, [chapter, subject, standard]);

  return {
    courseOptions,
    subjectOptions,
    chapterOptions,
    topicOptions,
    selectedCourse,
    selectedSubject,
    selectedChapter,
    selectedTopic,
    setSelectedCourse,
    setSelectedSubject,
    setSelectedChapter,
    setSelectedTopic,
    fetchSubjectOptions,
    fetchChapterOptions,
    fetchTopicOptions,
    fetchCourseOptions,
  };
};

export default useDefaultStdOption;
