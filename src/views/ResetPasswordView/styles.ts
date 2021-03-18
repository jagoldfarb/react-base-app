import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from 'helpers/enums/colors';

export const ResetPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResetPasswordContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`;

export const Description = styled.span`
  font-size: 16px;
  margin-top: 30px;
`;

export const ResetPasswordFormContainer = styled.div`
  margin-top: 30px;
`;

export const CreateAccountContainer = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
`;

export const CreateAccountLink = styled(Link)`
  color: ${COLORS.greenChristi};
  margin-left: 5px;

  :hover {
    color: ${COLORS.gray};
  }
`;
