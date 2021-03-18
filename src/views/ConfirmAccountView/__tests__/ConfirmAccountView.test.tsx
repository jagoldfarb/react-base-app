import React from 'react';
import { render } from '@testing-library/react';

import ConfirmAccountView from '..';

describe('ConfirmAccountView view', () => {
  it('Should render the confirm account page', () => {
    const { asFragment, getByTestId } = render(<ConfirmAccountView />);
    expect(getByTestId('confirm-account-view')).toBeDefined();
    expect(getByTestId('loader')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
