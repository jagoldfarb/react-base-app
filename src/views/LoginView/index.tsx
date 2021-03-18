import React, { FunctionComponent } from 'react';
import i18next from 'i18next';

import LoginForm from 'views/LoginView/components/LoginForm';

import { ILoginViewProps } from './types';
import {
  LoginContainer,
  LoginContent,
  Title,
  LoginFormContainer,
  SignUpContainer,
  SignUpLink,
} from './styles';
import './i18n';

const LoginView: FunctionComponent<ILoginViewProps> = (props: ILoginViewProps) => {
  const { onSubmit } = props;

  return (
    <LoginContainer data-testid="login-view">
      <LoginContent>
        <Title>{i18next.t('LOGIN_VIEW:LOGIN')}</Title>
        <LoginFormContainer>
          <LoginForm onSubmit={onSubmit} />
        </LoginFormContainer>
        <SignUpContainer>
          {i18next.t('LOGIN_VIEW:DONT_HAVE_ACCOUNT')}
          <SignUpLink to="/signup">{i18next.t('LOGIN_VIEW:SIGNUP')}</SignUpLink>
        </SignUpContainer>
      </LoginContent>
    </LoginContainer>
  );
};

export default LoginView;
