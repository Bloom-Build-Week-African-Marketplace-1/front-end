import axios from 'axios';
import API_URL from '../constants.js';

// A axios calls to protected data
// I had to turn axiosWithAuth into a function in order ot make redux work, sorry!
const axiosWithAuth = () => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization:
        typeof localStorage.getItem('token') === 'string'
          ? localStorage.getItem('token')
          : '',
    },
  });
};

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
