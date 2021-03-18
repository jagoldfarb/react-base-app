import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from 'redux/store';

import ErrorView from '..';

describe('Error view', () => {
  it('Should render the error page', () => {
    const { asFragment, getByTestId, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ErrorView />
        </MemoryRouter>
      </Provider>,
    );
    expect(getByTestId('error-view')).toBeDefined();
    expect(getByText('Page not found')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
