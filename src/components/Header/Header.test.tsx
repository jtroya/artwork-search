import React from 'react';
import { screen, cleanup, fireEvent } from '@testing-library/react';

import { render } from '../../test-utils';
import { Header } from './Header';

afterEach(cleanup);

describe('Header component', () => {
  test('render Header component', () => {
    render(<Header />);
    const title = screen.getByText(/artwork/i);
    const button = screen.getByRole('button');
    const menuIcon = screen.getByTestId('menu-icon');
    expect(title).toBeInTheDocument();
    expect(menuIcon).toBeTruthy();
    fireEvent.click(button);
    const closeIcon = document.querySelector('#close-icon');
    expect(closeIcon).toBeTruthy();
  });
});
