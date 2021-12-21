import React, {useState} from 'react';
import axios from 'axios';
import API_URL from '../constants';

const OwnerLogin = () => {
  const initialState = {
    username: '',
    password: ''
  }

  const [state, setState] = useState(initialState);
 
  const handleChange = (e)=> {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  
   const handleSubmit = (e)=> { 
       e.preventDefault();
       const userCredentials = {"email": "eve.holt@reqres.in",
       "password": "cityslicka"};
        axios.post(`${API_URL}/login`, userCredentials)
        .then( resp => {
            const token = resp.data.token;
            localStorage.setItem('token', token);
        })
        .catch( err => console.error(err))
    
    }       
    
  return( 
    <div>
    
          <div>
            
            <h2>LOGIN</h2>
            <form  onSubmit={handleSubmit} >
                <label>
                    USERNAME
                    <input type='text' value={state.username} onChange={handleChange} name='username' />
                </label>
    
                <label>
                    PASSWORD
                    <input type='text' value={state.password} onChange={handleChange} name='password' />
                </label>
    
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    
    </div>
  )
}

export default OwnerLogin;