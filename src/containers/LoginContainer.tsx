import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { ILoginFormData } from 'views/LoginView/types';
import { onLogin } from 'redux/actions/user.actions';

import LayoutContainer from 'containers/LayoutContainer';
import LoginView from 'views/LoginView';

const LoginContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData: ILoginFormData) => dispatch(onLogin(formData));

  return (
    <LayoutContainer>
      <LoginView onSubmit={onSubmit} />
    </LayoutContainer>
  );
};

export default LoginContainer;
