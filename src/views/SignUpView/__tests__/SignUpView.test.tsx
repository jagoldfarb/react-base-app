import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from 'redux/store';

import SignUpView from '..';

const defaultProps = {
  onSubmit: jest.fn(),
};

describe('SignUp View', () => {
  it('Should render the signup page', () => {
    const { asFragment, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SignUpView {...defaultProps} />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('signup-view')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
