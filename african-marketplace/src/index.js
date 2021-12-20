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

  return (
    <Switch>
      <Route path="/landing" component={LandingPage} />
      {/* any of the routes you need secured should be registered as SecureRoutes */}
      <Route
        path="/"
        exact
        component={() => <LandingPage />}
      />
      <Route path="/example-list" component={ExampleListPage} />
      
      
      <Route component={NotFoundPage} />
    </Switch>
    
  );
}
