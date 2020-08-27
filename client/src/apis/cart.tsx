import api from './util';

export const getCarts = async () => {
  const response = await api.get(`/cart`);
  return response.data;
};

export const createCart = async (productId: number, count: number) => {
  const response = await api.post('cart', { productId, count });
  return response.data;
};

export const updateCart = async (productId: number, count: number) => {
  const response = await api.put('cart', { productId, count });
  return response.data;
};

export const removeCart = async (productId: number) => {
  const response = await api.delete(`/cart/${productId}`);
  return response.data;
};
