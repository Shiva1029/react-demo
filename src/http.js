import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://httpbin.org',
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default {
  Service: instance,
  setToken,
};
