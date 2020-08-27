import api from './util';
import { getCookie } from '../util/common';
import { ISearchHistory } from '../../../types/modelTypes';

export const getHistories = async () => {
  const userId = getCookie('userId');
  const response = await api.get(`history/${userId}`);
  return response.data as ISearchHistory[];
};

export const createSearchHistory = async (body: ISearchHistory) => {
  const response = await api.post('history', body);
  return response.data;
};

export const removeHistory = async (id: number) => {
  const response = await api.delete(`history/${id}`);
  return response.data;
};
