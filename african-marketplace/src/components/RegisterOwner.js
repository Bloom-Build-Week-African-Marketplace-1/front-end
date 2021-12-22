import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../constants';
import { Link, useHistory } from 'react-router-dom';

const RegisterOwner = () => {
  const initialCredentials = {
    username: '',
    password: '',
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const { push } = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${API_URL}auth/register`, credentials)
      .then(resp => {
        console.log(resp);
        const password = resp.data.password;
        localStorage.setItem('password', password);
        push('/login');
      })
      .catch(err => console.error(err));
    push('/login');
  };

  return (
    <div>
      <div>
        <h2>REGISTER NEW OWNER</h2>
        <form onSubmit={handleSubmit}>
          <label>
            USERNAME
            <input
              type="text"
              value={credentials.username}
              onChange={handleChange}
              name="username"
            />
          </label>

          <label>
            PASSWORD
            <input
              type="text"
              value={credentials.password}
              onChange={handleChange}
              name="password"
            />
          </label>

          <input type="submit" value="SUBMIT" />
        </form>
      </div>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default RegisterOwner;
