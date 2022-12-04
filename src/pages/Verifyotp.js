/* eslint-disable global-require */
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { verifyOtp } from '../redux/users/user';
import checkData from './checkData';

function Verifyotp({ handleClick }) {
  const sleep = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms),
  );
  const otpdata = useSelector((state) => state.users);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      const formData = new FormData(event.target);
      const formDataObj = Object.fromEntries(formData.entries());
      let emailId = localStorage.getItem('email_id').replace(/"/, '');
      emailId = emailId.replace(/"/, '');
      dispatch(verifyOtp(emailId, formDataObj.otp));
      setValidated(true);
      if (otpdata.otp !== undefined) {
        const { otp } = otpdata;
        await sleep(0);
        checkData.checkHome(otp, setIsSubmitted, handleClick);
      }
    }
  };
  const renderForm = (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="custom-centered">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter OPT</Form.Label>
        <InputGroup hasValidation>
          <Form.Control name="otp" type="text" placeholder="Enter OTP" minLength={6} maxLength={6} required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter 6 digit OTP.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Button type="submit" className="btn btn-primary">
        Submit OTP
      </Button>
    </Form>
  );

  return (
    <div className="login-form-container">
      <div className="app">
        <div className="login-form">
          { isSubmitted
            ? (
              <>
                {/* <div> Welcome to Innova Lab App! </div> */}
              </>
            )
            : renderForm }
        </div>
      </div>
    </div>
  );
}

Verifyotp.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Verifyotp;
