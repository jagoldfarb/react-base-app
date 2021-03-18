import styled from 'styled-components';
import Modal from 'react-modal';

import { SIZES } from 'helpers/enums/sizes';
import { COLORS } from 'helpers/enums/colors';

import { ReactComponent as CloseModalSVG } from './assets/close-modal.svg';

export const ModalContainer = styled(Modal)`
  && {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    outline: none;

    @media (max-width: ${SIZES.bigPhone}px) {
      max-width: 100%;
      margin: 0 20px;
    }
  }
`;

export const ModalContent = styled.div`
  background-color: ${COLORS.white};
  padding: 10px;
  border-radius: 6px;
  max-height: 90vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const CloseModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CloseModalIcon = styled(CloseModalSVG)`
  cursor: pointer;
`;

export const ChildrenContainer = styled.div`
  padding: 30px;

  @media (max-width: ${SIZES.mediumPhone}px) {
    padding: 15px;
  }
`;
