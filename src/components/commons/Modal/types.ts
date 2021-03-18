import { ReactNode } from 'react';

export interface IModalProps {
  children: ReactNode;
  disabled?: boolean;
  isOpen: boolean;
  onClose?: () => void;
}
