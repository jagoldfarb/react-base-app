import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import store from 'redux/store';

import ResetPasswordForm from '..';

const defaultProps = {
  onSubmit: jest.fn(),
};

const Form = reduxForm({
  form: 'resetPassword',
})((props: any) => <ResetPasswordForm {...props} />);

describe('ResetPassword Form', () => {
  it('Should render the reset password form empty', () => {
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...defaultProps} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('reset-password-form')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the reset password form filled and press submit', () => {
    const props = {
      ...defaultProps,
      initialValues: {
        password: '123456789',
        passwordConfirmation: '123456789',
      },
    };
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...props} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('reset-password-form')).toBeDefined();
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the reset password form filled with wrong fields', () => {
    const props = {
      ...defaultProps,
      initialValues: {
        password: '123456',
        passwordConfirmation: '123456789',
      },
    };
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...props} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('reset-password-form')).toBeDefined();
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });
});
