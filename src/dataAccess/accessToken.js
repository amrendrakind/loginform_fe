const accessToken = () => {
  let token = '';
  if (localStorage.getItem('token') !== null) {
    token = localStorage.getItem('token').replace(/"/, '');
  } else {
    token = '';
  }
  return token;
};

export default accessToken;
