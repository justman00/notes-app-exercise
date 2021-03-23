import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ isAuthenticated, ...props }) {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;
