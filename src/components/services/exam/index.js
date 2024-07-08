import URLS from '../../../constants/api';
import axiosInstance from '../../../utilities/axios-client';

const getexames = async () => {
  return axiosInstance.get(`${URLS.GET_EXAMS}`);
};

export const getAllCourseData = async params => {
  return axiosInstance.get(URLS.GET_ALL_COURSES, { params });
};

export const createExamPaper = async data => {
  return axiosInstance.post(URLS.CREATE_EXAM_PAPER, data);
};

export const createExamApi = async data => {
  return axiosInstance.post(URLS.CREATE_EXAM, data);
};
const test = 'test';
export { getexames, test };
