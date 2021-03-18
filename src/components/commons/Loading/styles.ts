import styled from 'styled-components';

import { COLORS } from 'helpers/enums/colors';

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LoadingText = styled.span`
  font-size: 20px;
  color: ${COLORS.gray};
  margin-top: 20px;
`;
