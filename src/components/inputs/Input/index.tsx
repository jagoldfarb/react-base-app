import React, { useState, ChangeEvent, FunctionComponent } from 'react';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { IInputProps } from './types';
import { FormGroup, CustomInput, ErrorBlock } from './styles';

const Input: FunctionComponent<IInputProps> = (props: IInputProps) => {
  const {
    disabled = false,
    input,
    label = '',
    maxLength = 255,
    meta: { touched, error },
    rows = 3,
    rowsMax = 3,
    size = 'medium',
    type = 'text',
    variant = 'outlined',
  } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { onChange, value } = input;
  const isPasswordInput = type === 'password';
  const isTextAreaInput = type === 'textarea';
  const hasError = touched && !!error;

  const getInputType = () => {
    let inputType = type;
    if (isPasswordInput) {
      inputType = showPassword ? 'text' : type;
    }
    return inputType;
  };

  return (
    <FormGroup>
      <CustomInput
        {...input}
        disabled={disabled}
        error={hasError}
        inputProps={{ 'data-testid': `input-${label}`, maxLength }}
        label={label}
        multiline={isTextAreaInput}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        rows={rows}
        rowsMax={rowsMax}
        size={size}
        type={getInputType()}
        value={value}
        variant={variant}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          endAdornment: isPasswordInput && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                data-testid="toggle-password-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {hasError && <ErrorBlock data-testid="error-block">{error}</ErrorBlock>}
    </FormGroup>
  );
};

export default Input;
