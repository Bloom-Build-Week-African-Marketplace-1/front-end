import React, {useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../constants';
import { Link, useHistory, Redirect } from 'react-router-dom';


const OwnerAddItem = () => {
  const initialItemInfo = {
    name: '',
    description: '',
    price: '',
    location: ''
  }

  console.log(typeof localStorage.getItem('token'));
  const initialIsAddingItem = (typeof localStorage.getItem('token') === 'string');
  const [itemInfo, setItemInfo] = useState(initialItemInfo);
  const [isAddingItem, setIsAddingItem] = useState(initialIsAddingItem);


  const handleChange = (e)=> {
    
    setItemInfo({
      ...itemInfo,
      [e.target.name]: e.target.value,
    })

    console.log(itemInfo);
  }
  const {push} = useHistory();

   const handleSubmit = (e)=> { 
       e.preventDefault();
        // axios.post(`${API_URL}auth/item`, itemInfo)
        // .then( resp => {
        //     const token = resp.data.token;
            
            setIsAddingItem(false);
        // })
        // .catch( err => console.error(err))
    }       
    const handleCancel = (e)=> { 
        e.preventDefault();
     
             
             setIsAddingItem(false);
     }    
    
  return( 
    <div>
      { (isAddingItem) &&
          <div>
            
            <p><h2>ADD AN ITEM</h2>  <button>X</button></p>
            <form  onSubmit={handleSubmit} >
                <label>
                    PRODUCT NAME
                    <input type='text' value={itemInfo.name} onChange={handleChange} name='name' />
                </label>
    
                <label>
                    DESCRIPTION
                    <input type='text' value={itemInfo.description} onChange={handleChange} name='description' />
                </label>
                <label>
                    PRICE
                    <input type='text' value={itemInfo.price} onChange={handleChange} name='name' />
                </label>
    
                <label>
                    LOCATION
                    <input type='text' value={itemInfo.location} onChange={handleChange} name='description' />
                </label>
               
                <input type="submit" value="SUBMIT" />
            </form>
            
        <Link to='/register' >Register New Owner</Link>
        </div>
      }  
       { (isAddingItem) && <Redirect to='/shop/owner' />}
    </div>
  )
 
}

export default OwnerAddItem;
