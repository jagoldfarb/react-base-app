import React, { FunctionComponent } from 'react';
import i18next from 'i18next';

import SignUpForm from 'views/SignUpView/components/SignUpForm';

import { ISignUpViewProps } from './types';
import {
  SignUpContainer,
  SignUpContent,
  Title,
  SignUpFormContainer,
  LoginContainer,
  LoginLink,
} from './styles';
import './i18n';

const SignUpView: FunctionComponent<ISignUpViewProps> = (props: ISignUpViewProps) => {
  const { onSubmit } = props;

  return (
    <SignUpContainer data-testid="signup-view">
      <SignUpContent>
        <Title>{i18next.t('SIGNUP_VIEW:SIGNUP')}</Title>
        <SignUpFormContainer>
          <SignUpForm onSubmit={onSubmit} />
        </SignUpFormContainer>
        <LoginContainer>
          {i18next.t('SIGNUP_VIEW:ALREADY_HAVE_ACCOUNT')}
          <LoginLink to="/login">{i18next.t('SIGNUP_VIEW:LOGIN')}</LoginLink>
        </LoginContainer>
      </SignUpContent>
    </SignUpContainer>
  );
};

export default SignUpView;
