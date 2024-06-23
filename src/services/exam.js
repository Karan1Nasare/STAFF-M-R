import { APIClient } from '../utilities/axios-client';

export const getAllQuestionBanks = async data => {
  return APIClient().API('GET', `/questionbanks?search=${data}`, null, true);
};

export const deleteQuestionBank = async id => {
  return APIClient().API('DELETE', `/questionbanks/${id}`, null, true);
};

export const getCoursesList = async query => {
  return APIClient().API('GET', `getallcoursedata${query}`, null, true);
};
