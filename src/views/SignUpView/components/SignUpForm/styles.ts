import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from 'helpers/enums/colors';

export const Form = styled.form`
  width: 100%;
`;

export const TermsAndConditionsContainer = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
`;

export const TermsAndConditionsLink = styled(Link)`
  color: ${COLORS.greenChristi};
  margin-left: 5px;

  :hover {
    color: ${COLORS.gray};
  }
`;

export const ButtonContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;
