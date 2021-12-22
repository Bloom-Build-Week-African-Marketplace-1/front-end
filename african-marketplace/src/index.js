import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Link,
} from 'react-router-dom';

import '../src/styles.css';

import { LandingPage } from './components/pages/Landing';
import { LoadingComponent } from './components/common';
import ItemsList from './components/ItemsList';
import RegisterOwner from './components/RegisterOwner';
import OwnerLogin from './components/OwnerLogin';
import { PrivateRoute } from './components/PrivateRoute';
import OwnerAddItem from './components/OwnerAddItem';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const { push } = useHistory();

  const handleClickLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('password');
    localStorage.removeItem('user_id');
    push('/');
  };
  return (
    <>
      <div>
        <Link to="/login">Owner Login</Link>
        <Link to="/shop">Shop!</Link>
        <button onClick={handleClickLogout}>Logout</button>
      </div>

      <Route exact path="/" component={LandingPage} />
      {/* any of the routes you need secured should be registered as PrivateRoutes */}
      <Route path="/login" component={OwnerLogin} />

      <Route path="/register" component={RegisterOwner} />
      <PrivateRoute path="/shop/owner" component={OwnerAddItem} />
      <PrivateRoute path="/shop/owner" component={ItemsList} />
      <Route path="/shop" component={ItemsList} />
    </>
  );
}
