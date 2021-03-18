import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Footer from '..';

describe('Footer Component', () => {
  it('Should render the footer', () => {
    const { asFragment, getByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(getByTestId('footer')).toBeDefined();
    expect(getByTestId('footer-links-container')).toBeDefined();
    expect(getByTestId('footer-social-medias-container')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
