import { axiosBasic, axiosJWT } from './apiConnection';

const authenticateUser = (data) => axiosBasic().post('/authenticate', data);
const createUser = (data) => axiosBasic().post('/users', data);
const getUserByEmail = (data) => axiosBasic().post('/useremail', data);
const verifyOtp = (token, data) => axiosJWT(token).post('/verifyotp', data);

const ApiServices = {
  authenticateUser,
  createUser,
  getUserByEmail,
  verifyOtp,
};

export default ApiServices;
