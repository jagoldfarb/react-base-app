import React, { FunctionComponent } from 'react';
import i18next from 'i18next';

import Loading from 'components/commons/Loading';

import { ConfirmAccountContainer } from './styles';
import './i18n';

const ConfirmAccountView: FunctionComponent = () => (
  <ConfirmAccountContainer data-testid="confirm-account-view">
    <Loading message={i18next.t('CONFIRM_ACCOUNT_VIEW:MESSAGE')} />
  </ConfirmAccountContainer>
);

export default ConfirmAccountView;
