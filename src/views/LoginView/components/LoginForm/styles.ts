import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from 'helpers/enums/colors';

export const Form = styled.form`
  width: 100%;
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ForgotPasswordLink = styled(Link)`
  color: ${COLORS.greenChristi};
  font-size: 13px;
  cursor: pointer;

  :hover {
    color: ${COLORS.gray};
  }
`;

export const ButtonContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;
