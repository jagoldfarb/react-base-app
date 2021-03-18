import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Modal from '..';

const defaultProps = {
  children: <span>I am a modal</span>,
  isOpen: true,
  onClose: jest.fn(),
};

describe('Modal Component', () => {
  it('Should render the modal opened', () => {
    const { asFragment, getByTestId, getByText } = render(<Modal {...defaultProps} />);
    expect(getByTestId('modal')).toBeDefined();
    expect(getByTestId('modal-close-button')).toBeDefined();
    expect(getByText('I am a modal')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the modal opened and click close', () => {
    const { asFragment, getByTestId } = render(<Modal {...defaultProps} />);
    expect(getByTestId('modal')).toBeDefined();
    const closeButton = getByTestId('modal-close-button');
    expect(closeButton).toBeDefined();
    fireEvent.click(closeButton);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the modal and press escape', () => {
    const { asFragment, getByTestId } = render(<Modal {...defaultProps} />);
    const modal = getByTestId('modal');
    expect(modal).toBeDefined();
    fireEvent.keyUp(modal, { key: 'Escape', code: 'Escape', keyCode: 27 });
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the modal and press enter', () => {
    const { asFragment, getByTestId } = render(<Modal {...defaultProps} />);
    const modal = getByTestId('modal');
    expect(modal).toBeDefined();
    fireEvent.keyUp(modal, { key: 'Enter', code: 'Enter', keyCode: 13 });
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the modal disabled', () => {
    const props = { ...defaultProps, disabled: true, onClose: undefined };
    const { asFragment, getByTestId, getByText, queryByTestId } = render(<Modal {...props} />);
    expect(getByTestId('modal')).toBeDefined();
    expect(queryByTestId('modal-close-button')).toBeNull();
    expect(getByText('I am a modal')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the modal opened and click close without functionality', () => {
    const props = { ...defaultProps, onClose: undefined };
    const { asFragment, getByTestId } = render(<Modal {...props} />);
    expect(getByTestId('modal')).toBeDefined();
    const closeButton = getByTestId('modal-close-button');
    expect(closeButton).toBeDefined();
    fireEvent.click(closeButton);
    expect(asFragment()).toMatchSnapshot();
  });
});
