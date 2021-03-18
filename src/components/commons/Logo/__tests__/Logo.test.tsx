import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Logo from '..';

const defaultProps = {
  isDarkModeOn: false,
};

describe('Logo Component', () => {
  it('Should render the logo with dark mode off', () => {
    const { asFragment, getByTestId } = render(
      <MemoryRouter>
        <Logo {...defaultProps} />
      </MemoryRouter>,
    );
    expect(getByTestId('logo')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the logo with dark mode on', () => {
    const props = { ...defaultProps, isDarkModeOn: true };
    const { asFragment, getByTestId } = render(
      <MemoryRouter>
        <Logo {...props} />
      </MemoryRouter>,
    );
    expect(getByTestId('logo')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
