import api from './util';

export const getRecommendProducts = async () => {
  const response = await api.get(`/product/recommend`);
  return response.data;
};

export const getLatestProducts = async () => {
  const response = await api.get(`/product/recommend`);
  return response.data;
};
