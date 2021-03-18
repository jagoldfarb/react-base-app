import styled from 'styled-components';

import { COLORS } from 'helpers/enums/colors';

export const CustomButton = styled.button`
  border: 0;
  background: ${COLORS.black};
  color: ${COLORS.white};
  font: normal normal bold 14px/18px;
  padding: 14px 30px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  :hover {
    background: ${COLORS.gray};
    color: ${COLORS.white};
  }
`;
