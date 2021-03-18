import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from 'redux/store';

import LoginView from '..';

const defaultProps = {
  onOpenModal: jest.fn(),
  onSubmit: jest.fn(),
};

describe('Login View', () => {
  it('Should render the login page', () => {
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginView {...defaultProps} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('login-view')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
