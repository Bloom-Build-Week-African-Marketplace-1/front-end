// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file

import axiosWithAuth from '../../utils/axiosWithAuth';

export const ITEM_START = 'ITEM_START';
export const ITEM_SUCCESS = 'ITEM_SUCCESS';
export const ITEM_ERROR = 'ITEM_ERROR';
export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_FAIL = 'ITEM_FAIL';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const fetchItems = () => {
  return dispatch => {
    dispatch({ type: ITEM_START });

    axiosWithAuth()
      .get('/items') // I'm not sure if /items is the right url, my bad if it isn't
      .then(resp => {
        dispatch({ type: ITEM_SUCCESS, payload: resp.data });
      })
      .catch(err => {
        dispatch({ type: ITEM_FAIL, payload: err });
      });
  };
};

export const addItem = newItem => {
  return {
    type: ITEM_ADD,
    payload: newItem,
  };
};

export const setError = err => {
  return { type: ITEM_ERROR, payload: err };
};

export const getLogin = () => {
  return dispatch => {
    dispatch({ type: LOGIN_START });

    axiosWithAuth()
      .get('/login') // I'm not sure if /login is the right url, my bad if it isn't
      .then(resp => {
        dispatch({ type: LOGIN_SUCCESS, payload: resp.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAIL, payload: err });
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });

    axiosWithAuth()
      .post('/logout')
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.error(err);
      });
  };
};
