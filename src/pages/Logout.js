import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import checkData from './checkData';

const Logout = ({ handleClick }) => {
  useEffect(() => {
    checkData.removeToken();
    handleClick(false);
  });
  return (
    <div>
      <Form>
        <Form.Label>User logged out</Form.Label>
        <Navigate replace to="/" />
      </Form>
    </div>
  );
};

Logout.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Logout;
