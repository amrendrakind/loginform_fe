import axios from 'axios';
import accessToken from './accessToken';

const axiosBasic = () => axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

const axiosJWT = () => axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${accessToken()}`,
  },
});

export { axiosBasic, axiosJWT };
