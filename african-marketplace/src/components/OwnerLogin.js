import React, {useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../constants';
import { Link, useHistory, Redirect } from 'react-router-dom';


const OwnerLogin = () => {
  const initialCredentials = {
    username: '',
    password: ''
  }

  console.log(typeof localStorage.getItem('token'));
  const initialIsLoggedIn = (typeof localStorage.getItem('token') === 'string');
  const [credentials, setCredentials] = useState(initialCredentials);
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);


  const handleChange = (e)=> {
    
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })

    console.log(credentials);
  }
  const {push} = useHistory();

   const handleSubmit = (e)=> { 
       e.preventDefault();
        axios.post(`${API_URL}auth/login`, credentials)
        .then( resp => {
            const token = resp.data.token;
            localStorage.setItem('token', token);
            setIsLoggedIn((typeof localStorage.getItem('token') === 'string'));
        })
        .catch( err => console.error(err))
    }       
    
    
  return( 
    <div>
      { (!isLoggedIn) &&
          <div>
           
            <h2>LOGIN</h2>
            <form  onSubmit={handleSubmit} >
                <label>
                    USERNAME
                    <input type='text' value={credentials.username} onChange={handleChange} name='username' />
                </label>
    
                <label>
                    PASSWORD
                    <input type='text' value={credentials.password} onChange={handleChange} name='password' />
                </label>
    
                <input type="submit" value="SUBMIT" />
            </form>
            
        <Link to='/register' >Register New Owner</Link>
        </div>
      }  
       { (isLoggedIn) && <Redirect to='/shop/owner' />}
    </div>
  )
 
}

export default OwnerLogin;