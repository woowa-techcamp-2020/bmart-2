import api from './util';

export const getDibs = async () => {
  const response = await api.get(`/dib`);
  // TODO 이거 나중에 바꿔주세염.. 서버에서
  // @ts-ignore
  return response.data.map((data) => data.product);
};

export const createDib = async (body: { productId: number }) => {
  const response = await api.post('dib', body);
  return response.data;
};

export const removeDib = async (productId: number) => {
  const response = await api.delete(`dib/${productId}`);
  return response.data;
};
