import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { LogoContainer } from './styles';
import { ILogoProps } from './types';

const Logo: FunctionComponent<ILogoProps> = (props: ILogoProps) => {
  const { isDarkModeOn = false } = props;

  return (
    <LogoContainer data-testid="logo" isDarkModeOn={isDarkModeOn}>
      <Link to="/home">Logo</Link>
    </LogoContainer>
  );
};

export default Logo;
