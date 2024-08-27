import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => !!state.form.loginResponse.userToken || !!state.form.profile.userToken)// Adjust according to your state structure

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};


export default PrivateRoute;
