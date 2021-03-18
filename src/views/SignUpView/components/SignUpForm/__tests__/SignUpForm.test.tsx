import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import store from 'redux/store';

import SignUpForm from '..';

const defaultProps = {
  onSubmit: jest.fn(),
};

const Form = reduxForm({
  form: 'signup',
})((props: any) => <SignUpForm {...props} />);

describe('SignUp Form', () => {
  it('Should render the signup form empty', () => {
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...defaultProps} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('signup-form')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the signup form filled and press submit', () => {
    const props = {
      ...defaultProps,
      initialValues: {
        email: 'johndoe@gmail.com',
        firstName: 'John',
        lastName: 'Doe',
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
    expect(getByTestId('signup-form')).toBeDefined();
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the signup form filled with wrong fields', () => {
    const props = {
      ...defaultProps,
      initialValues: {
        email: 'johndoegmail.com',
        firstName: 'John',
        lastName: 'Doe',
        password: '123456789',
        passwordConfirmation: '123456',
      },
    };
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Form {...props} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('signup-form')).toBeDefined();
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
  });
});
