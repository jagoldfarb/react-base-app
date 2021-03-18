import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}
