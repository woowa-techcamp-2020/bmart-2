import api from './util';
import { IProduct } from '../../../types/modelTypes';

export const getDibs = async () => {
  const userId = 1;
  const response = await api.get(`/dib/${userId}`);
  return response.data;
};

export const createDib = async (product: IProduct) => {
  const response = await api.post('dib', { product });
  return response.data;
};
