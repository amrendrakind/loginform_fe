/* eslint-disable camelcase */
import ApiServices from '../../dataAccess/apiServices';
import accessToken from '../../dataAccess/accessToken';

//  actions
const AUTHENTICATE_USER = 'login/users/AUTHENTICATE_USER';
const CREATE_USER = 'login/users/CREATE_USER';
const GET_USER = 'login/users/GET_USER';
const VERIFY_OTP = 'login/users/VERIFY_OTP';

//  reducers
export default function users(state = [], action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action;
    case CREATE_USER:
      return action.payload;
    case GET_USER:
      return action;
    case VERIFY_OTP:
      return action.payload;
    default:
      return state;
  }
}

export const verifyOtp = (email, lastotp) => async (dispatch) => {
  try {
    const data = { email: `${email}`, last_otp: `${lastotp}` };
    const res = await fetch('http://localhost:3000/verifyotp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken()}`,
      },
      body: JSON.stringify(data),
    });
    dispatch({
      type: VERIFY_OTP,
      payload: await res.json(),
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const data = { email: `${email}`, password: `${password}` };
    const userInfo = JSON.stringify(data);
    const res = await ApiServices.authenticateUser(userInfo);
    if (res.data) {
      localStorage.setItem('token', JSON.stringify(res.data.auth_token));
    }
    dispatch({
      type: AUTHENTICATE_USER,
      payload: res.data,
    });
    return true;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getUser = (email) => async (dispatch) => {
  try {
    const data = { email };
    const params = JSON.stringify(data);
    const res = await ApiServices.getUserByEmail(params);
    if (res.data) {
      localStorage.setItem('user_id', JSON.stringify(res.data.id));
      localStorage.setItem('email_id', JSON.stringify(res.data.email));
    }
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createUser = (email, password,
  password_confirmation) => async (dispatch) => {
  try {
    const userInfo = {
      email,
      password,
      password_confirmation,
    };
    const params = JSON.stringify(userInfo);
    const response = await ApiServices.createUser(params);
    dispatch({
      type: CREATE_USER,
      payload: response.data,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
