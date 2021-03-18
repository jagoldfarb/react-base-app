import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from 'redux/store';

import ResetPasswordView from '..';

const defaultProps = {
  onSubmit: jest.fn(),
};

describe('ResetPassword View', () => {
  it('Should render the reset password page', () => {
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ResetPasswordView {...defaultProps} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('reset-password-view')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
