import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from './pages/auth/auth';


const AppRoutes = () => {
  return (
    <div className="main-container">
       <Switch>
        <Route exact path="/" component={AuthPage} />
      </Switch>
    </div>
  )
}

export default AppRoutes;
