import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { IButtonProps } from './types';
import { CustomButton } from './styles';

const Button: FunctionComponent<IButtonProps> = (props: IButtonProps) => {
  const {
    children,
    className = '',
    disabled = false,
    href = null,
    onClick,
    type = 'button',
  } = props;

  const renderButton = () => (
    <CustomButton
      className={className}
      data-testid="button"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </CustomButton>
  );

  return href ? <Link to={href}>{renderButton()}</Link> : renderButton();
};

export default Button;
