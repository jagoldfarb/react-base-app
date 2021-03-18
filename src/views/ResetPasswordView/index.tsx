import React, { FunctionComponent } from 'react';
import i18next from 'i18next';

import ResetPasswordForm from 'views/ResetPasswordView/components/ResetPasswordForm';

import { IResetPasswordViewProps } from './types';
import {
  ResetPasswordContainer,
  ResetPasswordContent,
  Title,
  Description,
  ResetPasswordFormContainer,
  CreateAccountContainer,
  CreateAccountLink,
} from './styles';
import './i18n';

const ResetPasswordView: FunctionComponent<IResetPasswordViewProps> = (
  props: IResetPasswordViewProps,
) => {
  const { onSubmit } = props;

  return (
    <ResetPasswordContainer data-testid="reset-password-view">
      <ResetPasswordContent>
        <Title>{i18next.t('RESET_PASSWORD_VIEW:TITLE')}</Title>
        <Description>{i18next.t('RESET_PASSWORD_VIEW:DESCRIPTION')}</Description>
        <ResetPasswordFormContainer>
          <ResetPasswordForm onSubmit={onSubmit} />
        </ResetPasswordFormContainer>
        <CreateAccountContainer>
          <CreateAccountLink to="/signup">
            {i18next.t('RESET_PASSWORD_VIEW:CREATE_ACCOUNT')}
          </CreateAccountLink>
        </CreateAccountContainer>
      </ResetPasswordContent>
    </ResetPasswordContainer>
  );
};

export default ResetPasswordView;
