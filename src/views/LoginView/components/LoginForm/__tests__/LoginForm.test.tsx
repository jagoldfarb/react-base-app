import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import store from 'redux/store';

import LoginForm from '..';

const defaultProps = {
  onOpenModal: jest.fn(),
  onSubmit: jest.fn(),
};

const Form = reduxForm({
  form: 'login',
})((props: any) => <LoginForm {...props} />);

describe('Login Form', () => {
  it('Should render the login form empty', () => {
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...defaultProps} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('login-form')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the login form filled and press submit', () => {
    const props = {
      ...defaultProps,
      initialValues: {
        email: 'johndoe@gmail.com',
        password: '123456789',
      },
    };
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...props} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('login-form')).toBeDefined();
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the login form filled with wrong fields', () => {
    const props = {
      ...defaultProps,
      initialValues: {
        email: 'johndoegmail.com',
        password: '123456',
      },
    };
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...props} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('login-form')).toBeDefined();
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });
});
