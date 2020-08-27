import axios from 'axios';
import api from './util';
import history from '../history';
import { deleteCookie } from '../util/common';

const userAxios = axios.create({
  baseURL: 'http://localhost:4000',
});

export const login = async () => {
  history.push('/auth/github');
  window.location.reload(false);
  return null;
};

export const logout = async () => {
  deleteCookie('name');
  deleteCookie('jwt');
  deleteCookie('userId');
  history.push('/');
};
