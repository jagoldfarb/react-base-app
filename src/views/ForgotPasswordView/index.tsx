import React, { FunctionComponent } from 'react';
import i18next from 'i18next';

import ForgotPasswordForm from 'views/ForgotPasswordView/components/ForgotPasswordForm';

import { IForgotPasswordViewProps } from './types';
import {
  ForgotPasswordContainer,
  ForgotPasswordContent,
  Title,
  Description,
  ForgotPasswordFormContainer,
  CreateAccountContainer,
  CreateAccountLink,
} from './styles';
import './i18n';

const ForgotPasswordView: FunctionComponent<IForgotPasswordViewProps> = (
  props: IForgotPasswordViewProps,
) => {
  const { onSubmit } = props;

  return (
    <ForgotPasswordContainer data-testid="forgot-password-view">
      <ForgotPasswordContent>
        <Title>{i18next.t('FORGOT_PASSWORD_VIEW:TITLE')}</Title>
        <Description>{i18next.t('FORGOT_PASSWORD_VIEW:DESCRIPTION')}</Description>
        <ForgotPasswordFormContainer>
          <ForgotPasswordForm onSubmit={onSubmit} />
        </ForgotPasswordFormContainer>
        <CreateAccountContainer>
          <CreateAccountLink to="/signup">
            {i18next.t('FORGOT_PASSWORD_VIEW:CREATE_ACCOUNT')}
          </CreateAccountLink>
        </CreateAccountContainer>
      </ForgotPasswordContent>
    </ForgotPasswordContainer>
  );
};

export default ForgotPasswordView;
