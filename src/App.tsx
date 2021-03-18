import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, SwitchProps } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import { onInitialize } from 'redux/actions/app.actions';

// import PrivateRoute from 'containers/PrivateRoute';
import HomeContainer from 'containers/HomeContainer';
import LoginContainer from 'containers/LoginContainer';
import SignUpContainer from 'containers/SignUpContainer';
import ForgotPasswordContainer from 'containers/ForgotPasswordContainer';
import ConfirmAccountContainer from 'containers/ConfirmAccountContainer';
import ResetPasswordContainer from 'containers/ResetPasswordContainer';
import ErrorView from 'views/ErrorView';

import { GlobalStyle } from './styles';
import 'react-notifications/lib/notifications.css';

const App: FunctionComponent<SwitchProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onInitialize());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <NotificationContainer />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/forgot-password" component={ForgotPasswordContainer} />
        <Route path="/confirm-account/:token" component={ConfirmAccountContainer} />
        <Route path="/reset-password/:token" component={ResetPasswordContainer} />
        <Route component={ErrorView} />
      </Switch>
    </>
  );
};

export default App;
