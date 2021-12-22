import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = props => {
  const isLoggedIn = typeof localStorage.getItem('token') === 'string';
  const { component: Component, ...rest } = props;
  if (isLoggedIn) {
    return <>{isLoggedIn && <Route {...rest} component={Component} />}</>;
  } else {
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;
