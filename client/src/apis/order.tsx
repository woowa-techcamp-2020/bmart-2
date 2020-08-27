import api from './util';

export const getOrders = async () => {
  const response = await api.get(`/order`);
  return response.data;
};

export const createOrder = async (body: {
  products: { id: number; count: number }[];
}) => {
  const response = await api.post('order', body);
  return response.data;
};
