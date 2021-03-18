import styled from 'styled-components';

import { COLORS } from 'helpers/enums/colors';

import { ILogoProps } from './types';

export const LogoContainer = styled.div`
  a {
    color: ${({ isDarkModeOn }: ILogoProps) => (isDarkModeOn ? COLORS.white : COLORS.black)};
    font-size: 2em;
  }

  a:hover {
    color: ${COLORS.gray};
  }
`;
