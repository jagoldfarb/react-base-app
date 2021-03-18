import React, { FunctionComponent } from 'react';

import LayoutContainer from 'containers/LayoutContainer';
import HomeView from 'views/HomeView';

const HomeContainer: FunctionComponent = () => {
  const name = 'Home';

  return (
    <LayoutContainer>
      <HomeView name={name} />
    </LayoutContainer>
  );
};

export default HomeContainer;
