import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInPage from './pages/signIn/signIn-page';
import SignUpPage from './pages/signUp/signUp-page';

import AuthPageFooter from './components/Footer/AuthPageFooter'


const AppRoutes = () => {
  return (
    <div className="main-container">
      <div className="left-container">

      </div>
      <div className="right-container">
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/register" component={SignUpPage} />
      </Switch>
      <AuthPageFooter/>
      </div>
    </div>
  )
}

export default AppRoutes;
