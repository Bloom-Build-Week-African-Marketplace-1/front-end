import React from 'react';
import { Route } from 'react-router-dom';

export const PrivateRoute = (props) => {
    const token = localStorage.getItem('token');
    const {component: Component, ...rest} = props;
    return( 
    <>
      { token && <Route {...rest} component={Component} /> }
    </>
   );
}

export default PrivateRoute