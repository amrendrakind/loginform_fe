const checkOtp = (setIsSubmitted, handleClick) => {
  if (localStorage.getItem('user_id') !== null) {
    setIsSubmitted(true);
    handleClick(true);
    window.location.href = '/verifyotp';
  } else {
    setIsSubmitted(false);
    handleClick(false);
  }
};

const checkHome = (otpdata, setIsSubmitted, handleClick) => {
  if (localStorage.getItem('user_id') !== null) {
    if (otpdata === 'verified') {
      window.location.href = '/homepage';
    } else {
      window.location.href = '/verifyotp';
    }
    setIsSubmitted(true);
  } else {
    setIsSubmitted(false);
    handleClick(false);
  }
};

const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  localStorage.removeItem('email_id');
};

const getUserName = () => {
  const userName = localStorage.getItem('email_id');
  return userName;
};

export default {
  checkOtp, removeToken, getUserName, checkHome,
};
