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
