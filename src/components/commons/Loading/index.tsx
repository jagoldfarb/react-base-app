import React, { FunctionComponent } from 'react';

import { CircularProgress } from '@material-ui/core';

import { ILoadingProps } from './types';
import { LoadingContainer, LoadingText } from './styles';

const Loading: FunctionComponent<ILoadingProps> = (props: ILoadingProps) => {
  const { message = '', size = 65 } = props;
  return (
    <LoadingContainer>
      <CircularProgress data-testid="loader" size={size} />
      {!!message && <LoadingText>{message}</LoadingText>}
    </LoadingContainer>
  );
};

export default Loading;
