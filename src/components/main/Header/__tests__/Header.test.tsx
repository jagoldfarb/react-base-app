import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { userFactory } from 'tests/user.factory';

import Header from '..';

const defaultProps = {
  isMenuOpened: false,
  toggleMenu: jest.fn(),
  user: null,
};

describe('Header component', () => {
  it('Should render the header', () => {
    const { asFragment, getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <Header {...defaultProps} />
      </MemoryRouter>,
    );
    expect(getByTestId('header')).toBeDefined();
    expect(getByTestId('menu-content')).toBeDefined();
    expect(getByTestId('nav-link-1')).toBeDefined();
    expect(getByTestId('nav-link-2')).toBeDefined();
    expect(getByTestId('nav-link-3')).toBeDefined();
    expect(getByTestId('nav-link-signup')).toBeDefined();
    expect(getByTestId('nav-link-login')).toBeDefined();
    expect(queryByTestId('nav-link-logout')).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the header with menu opened', () => {
    const props = { ...defaultProps, isMenuOpened: true };
    const { asFragment, getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>,
    );
    expect(getByTestId('header')).toBeDefined();
    expect(getByTestId('menu-overlay')).toBeDefined();
    expect(getByTestId('menu-content')).toBeDefined();
    expect(getByTestId('nav-link-1')).toBeDefined();
    expect(getByTestId('nav-link-2')).toBeDefined();
    expect(getByTestId('nav-link-3')).toBeDefined();
    expect(getByTestId('nav-link-signup')).toBeDefined();
    expect(getByTestId('nav-link-login')).toBeDefined();
    expect(queryByTestId('nav-link-logout')).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the header with user logged in', () => {
    const props = { ...defaultProps, user: userFactory(1) };
    const { asFragment, getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>,
    );
    expect(getByTestId('header')).toBeDefined();
    expect(getByTestId('menu-overlay')).toBeDefined();
    expect(getByTestId('menu-content')).toBeDefined();
    expect(getByTestId('nav-link-1')).toBeDefined();
    expect(getByTestId('nav-link-2')).toBeDefined();
    expect(getByTestId('nav-link-3')).toBeDefined();
    expect(queryByTestId('nav-link-signup')).toBeNull();
    expect(queryByTestId('nav-link-login')).toBeNull();
    expect(getByTestId('nav-link-logout')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
