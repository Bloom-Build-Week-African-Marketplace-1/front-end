import React from 'react';

const PrivateRoute = (props) => {
    const token =localStorage.getData('token');
    const {component: Component, ...rest} = props;
    return( 
    <>
      { token && <Route {...rest} component={Component} /> }
    </>
   );
}

export default PrivateRoute