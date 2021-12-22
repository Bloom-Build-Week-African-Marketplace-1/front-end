import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../constants';
import { Link, useHistory, Redirect } from 'react-router-dom';

const OwnerLogin = () => {
  const initialState = {
    username: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let token = '';
    token = await getToken();
    localStorage.setItem('token', token);
  };

  const getToken = () => {
    return axios
      .post(`${API_URL}auth/login`, state)
      .then(resp => {
        return resp.data.token;
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      {typeof localStorage.getItem('token') !== 'string' && (
        <div>
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <label>
              USERNAME
              <input
                type="text"
                value={state.username}
                onChange={handleChange}
                name="username"
              />
            </label>

            <label>
              PASSWORD
              <input
                type="text"
                value={state.password}
                onChange={handleChange}
                name="password"
              />
            </label>

            <input type="submit" value="SUBMIT" />
          </form>

          <Link to="/register">Register New Owner</Link>
        </div>
      )}
      {typeof localStorage.getItem('token') === 'string' && (
        <Redirect to="/shop/owner" />
      )}
    </div>
  );
};

export default OwnerLogin;
