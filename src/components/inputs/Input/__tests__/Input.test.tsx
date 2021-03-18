import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from '..';

const defaultProps = {
  input: {
    name: 'email',
    onChange: jest.fn(),
    value: '',
  },
  label: 'Email',
  meta: {
    error: '',
    touched: false,
  },
};

describe('Input Component', () => {
  it('Should render the input', () => {
    const { asFragment, getByTestId } = render(<Input {...defaultProps} />);
    expect(getByTestId('input-Email')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the input with no label', () => {
    const props = { ...defaultProps, label: undefined };
    const { asFragment, getByTestId } = render(<Input {...props} />);
    expect(getByTestId('input-')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the input as a password input', () => {
    const props = {
      ...defaultProps,
      label: 'Password',
      type: 'password',
    };
    const { asFragment, getByTestId } = render(<Input {...props} />);
    expect(getByTestId('input-Password')).toBeDefined();
    // Press toggle password button
    const togglePasswordInput = getByTestId('toggle-password-button');
    expect(togglePasswordInput).toBeDefined();
    fireEvent.click(togglePasswordInput);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the input as a textarea input', () => {
    const props = {
      ...defaultProps,
      label: 'Message',
      type: 'textarea',
    };
    const { asFragment, getByTestId } = render(<Input {...props} />);
    expect(getByTestId('input-Message')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the input and change the value', () => {
    const { asFragment, getByTestId } = render(<Input {...defaultProps} />);
    const input = getByTestId('input-Email');
    expect(input).toBeDefined();
    fireEvent.change(input, { target: { value: 'info@gmail.com' } });
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the input with errors', () => {
    const props = {
      ...defaultProps,
      meta: {
        error: 'Required',
        touched: true,
      },
    };
    const { asFragment, getByTestId, getByText } = render(<Input {...props} />);
    expect(getByTestId('input-Email')).toBeDefined();
    expect(getByTestId('error-block')).toBeDefined();
    expect(getByText('Required')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
