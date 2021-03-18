import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import store from 'redux/store';

import ForgotPasswordForm from '..';

const defaultProps = {
  onSubmit: jest.fn(),
};

const Form = reduxForm({
  form: 'forgotPassword',
})((props: any) => <ForgotPasswordForm {...props} />);

describe('ForgotPassword Form', () => {
  it('Should render the forgot password form empty', () => {
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...defaultProps} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('forgot-password-form')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the ForgotPassword form filled and press submit', () => {
    const props = {
      ...defaultProps,
      initialValues: {
        email: 'johndoe@gmail.com',
      },
    };
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...props} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('forgot-password-form')).toBeDefined();
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the ForgotPassword form filled with wrong fields', () => {
    const props = {
      ...defaultProps,
      initialValues: {
        email: 'johndoegmail.com',
      },
    };
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...props} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('forgot-password-form')).toBeDefined();
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });
});
