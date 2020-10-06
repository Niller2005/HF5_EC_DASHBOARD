import Axios from 'axios';

const axiosAPI = Axios.create({
  baseURL: 'http://163.172.146.229:1337/',
});

const apiRequest = (method, url, request) => {
  const headers = {
    authorization: '',
  };

  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const get = (url, request) => apiRequest('get', url, request);
const post = (url, request) => apiRequest('post', url, request);
const deleteRequest = (url, request) => apiRequest('delete', url, request);
const put = (url, request) => apiRequest('put', url, request);
const patch = (url, request) => apiRequest('patch', url, request);

const API = {
  get,
  post,
  delete: deleteRequest,
  put,
  patch,
};

export default API;
