import api from './util';

export const getCarts = async () => {
  const userId = 1;
  const response = await api.get(`/cart/${userId}`);
  return response.data;
};

export const createCart = async (
  productId: number,
  userId: number,
  count: number
) => {
  const response = await api.post('cart', { productId, userId, count });
  return response.data;
};

export const updateCart = async (
  productId: number,
  userId: number,
  count: number
) => {
  const response = await api.put('cart', { productId, userId, count });
  return response.data;
};

export const removeCart = async (productId: number) => {
  const response = await api.delete(`/cart/${productId}`);
  return response.data;
};
