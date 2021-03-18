import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Button from '..';

const defaultProps = {
  children: <span>I am a button</span>,
};

describe('Button Component', () => {
  it('Should render the button without functionality', () => {
    const { asFragment, getByTestId, getByText } = render(
      <MemoryRouter>
        <Button {...defaultProps} />
      </MemoryRouter>,
    );
    expect(getByTestId('button')).toBeDefined();
    expect(getByText('I am a button')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the button with onClick function', () => {
    const props = { ...defaultProps, onClick: jest.fn() };
    const { asFragment, getByTestId, getByText } = render(
      <MemoryRouter>
        <Button {...props} />
      </MemoryRouter>,
    );
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(getByText('I am a button')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the button as a link', () => {
    const props = { ...defaultProps, href: '/home' };
    const { asFragment, getByTestId, getByText } = render(
      <MemoryRouter>
        <Button {...props} />
      </MemoryRouter>,
    );
    const button = getByTestId('button');
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(getByText('I am a button')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
