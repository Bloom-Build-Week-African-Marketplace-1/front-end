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
    let data = '';
    data = await getUserData();
    localStorage.setItem('token', data.token);
    localStorage.setItem('user_id', data.user_id);
    //localStorage.setItem('userID', token);
  };

  const getUserData = () => {
    return axios
      .post(`${API_URL}auth/login`, state)
      .then(resp => {
        console.log(resp);
        return resp.data;
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="log-in-container">
      {typeof localStorage.getItem('token') !== 'string' && (
        <div className="owner-log-in-card">
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
                type="password"
                value={state.password}
                onChange={handleChange}
                name="password"
              />
            </label>

            <input type="submit" value="Log-In" id="submit-button"></input>
          </form>
          <p>Don't have an account?</p>
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
