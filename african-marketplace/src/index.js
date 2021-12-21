import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { LandingPage } from './components/pages/Landing';
import { LoadingComponent } from './components/common';
import OwnerLogin from '../../OwnerLogin';
import OwnerAddItem from '../../OwnerAddItem';
import {ItemsList} from '../../ItemsList';
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
  const history = useHistory();

  return (<>
  <div>
    <Link to="/login">Owner Login</Link>
    <Link to="/shop">Shop!</Link>
    <Link to="/logout">Logout</Link>
  </div>
    <Switch>
      <Route exact path="/landing" component={LandingPage} />
      {/* any of the routes you need secured should be registered as PrivateRoutes */}

      <Route  path="/login" component={OwnerLogin}/>
      <PrivateRoute path="/owner" component={OwnerAddItem} />
      <PrivateRoute path="/owner" owner={true} component={ItemsList} />
      <Route path="/shop" component={ItemsList} />
     
      
      
      <Route component={NotFoundPage} />
    </Switch>
    </>
  );
}
