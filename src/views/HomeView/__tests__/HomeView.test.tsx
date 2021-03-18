import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomeView from '..';

const defaultProps = {
  name: 'Home',
};

describe('Home View', () => {
  it('Should render the home view', () => {
    const { asFragment, getByTestId, getByText } = render(
      <MemoryRouter>
        <HomeView {...defaultProps} />
      </MemoryRouter>,
    );
    expect(getByTestId('home-view')).toBeDefined();
    expect(getByText('Home')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
