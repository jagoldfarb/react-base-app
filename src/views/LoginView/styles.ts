import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from 'helpers/enums/colors';
import { SIZES } from 'helpers/enums/sizes';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${SIZES.smallDesktop}px;
  margin: 0 auto 50px;

  @media (max-width: ${SIZES.smallDesktop}px) {
    padding: 0 25px;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: ${SIZES.bigTablet}px) {
    width: 70%;
  }

  @media (max-width: ${SIZES.smallTablet}px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const LoginFormContainer = styled.div`
  margin-top: 30px;
`;

export const SignUpContainer = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
`;

export const SignUpLink = styled(Link)`
  color: ${COLORS.greenChristi};
  margin-left: 5px;

  :hover {
    color: ${COLORS.gray};
  }
`;
