import axios from 'axios';
import API_URL from '../constants.js'





const getAuthHeader = authState => {
    if (!localStorage.getItem('token')) {
      throw new Error('Not authenticated');
    }
    return { Authorization: localStorage.getItem('token') };
};



// A axios calls to protected data

const axiosWithAuth = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: getAuthHeader()
  });


// at '/owner'  load in the owner's items
// useEffect(() => {
//       setIsLoading = true;
//     axiosWithAuth
//       .get("apiURL/items")
//       .then(res => {
//         setItems(res.data);
//       })
//       .catch(error => console.log(error));
//   }, []);




export default axiosWithAuth;