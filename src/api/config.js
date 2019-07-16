import axios from 'axios';

const access_token = window.localStorage.getItem('td_access_token');

const instance = axios.create({
  baseUrl: 'http://localhost:4000/',
  headers: { authorization: `Bearer ${access_token}` || '' }
});

export default instance;
