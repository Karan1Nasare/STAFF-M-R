import URLS from '../../constants/api';
import axiosInstance from '../../utilities/axios-client';

export const getbanners = async () => {
  return axiosInstance.get(URLS.GET_BANNER());
};
export const addbanner = async data => {
  return axiosInstance.post(URLS.ADD_BANNER(), data);
};
