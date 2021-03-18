import React, { FunctionComponent } from 'react';
import i18next from 'i18next';

import LayoutContainer from 'containers/LayoutContainer';

import { ErrorContainer } from './styles';
import './i18n';

const ErrorView: FunctionComponent = () => (
  <LayoutContainer>
    <ErrorContainer data-testid="error-view">
      <h1>{i18next.t('ERROR_VIEW:PAGE_NOT_FOUND')}</h1>
    </ErrorContainer>
  </LayoutContainer>
);

export default ErrorView;
