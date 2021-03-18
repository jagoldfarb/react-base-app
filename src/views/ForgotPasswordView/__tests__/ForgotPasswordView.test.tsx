import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from 'redux/store';

import ForgotPasswordView from '..';

const defaultProps = {
  onSubmit: jest.fn(),
};

describe('ForgotPassword View', () => {
  it('Should render the forgot password page', () => {
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ForgotPasswordView {...defaultProps} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('forgot-password-view')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
