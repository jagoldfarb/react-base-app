import React from 'react';
import { render } from '@testing-library/react';

import Loading from '..';

describe('Loading Component', () => {
  it('Should render the loader', () => {
    const { asFragment, getByTestId } = render(<Loading />);
    expect(getByTestId('loader')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the loader with text', () => {
    const props = { message: 'Loading...' };
    const { asFragment, getByTestId, getByText } = render(<Loading {...props} />);
    expect(getByTestId('loader')).toBeDefined();
    expect(getByText('Loading...')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
