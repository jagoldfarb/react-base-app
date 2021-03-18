import React, { FunctionComponent, useEffect } from 'react';
import ReactModal from 'react-modal';

import { COLORS } from 'helpers/enums/colors';

import { IModalProps } from './types';
import {
  ModalContainer,
  ModalContent,
  CloseModalContainer,
  CloseModalIcon,
  ChildrenContainer,
} from './styles';

ReactModal.defaultStyles.overlay = {
  ...ReactModal.defaultStyles.overlay,
  backgroundColor: COLORS.modalBackground,
  zIndex: 10,
};

const Modal: FunctionComponent<IModalProps> = (props: IModalProps) => {
  const { children, disabled = false, isOpen, onClose = () => {} } = props;

  useEffect(() => {
    // 27: Escape key
    const handleKeyUp = (event: KeyboardEvent) => event.keyCode === 27 && !disabled && onClose();
    window.addEventListener('keyup', handleKeyUp, false);
    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  });

  return (
    <ModalContainer ariaHideApp={false} isOpen={isOpen}>
      <ModalContent data-testid="modal">
        {!disabled && (
          <CloseModalContainer>
            <CloseModalIcon data-testid="modal-close-button" onClick={onClose} />
          </CloseModalContainer>
        )}
        <ChildrenContainer>{children}</ChildrenContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
