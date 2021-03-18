import React, { FunctionComponent } from 'react';

import { IHomeViewProps } from './types';
import { HomeContainer } from './styles';

const HomeView: FunctionComponent<IHomeViewProps> = (props: IHomeViewProps) => {
  const { name } = props;

  return (
    <HomeContainer data-testid="home-view">
      <h1>{name}</h1>
    </HomeContainer>
  );
};

export default HomeView;
