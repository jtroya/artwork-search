import React from 'react';
import { screen, cleanup } from '@testing-library/react';

import { render } from '../../test-utils';

import { CloseIcon } from './CloseIcon';
import { LibraryIcon } from './LibraryIcon';
import { MenuIcon } from './MenuIcon';
import { PictureIcon } from './PictureIcon';
import { SearchIcon } from './SearchIcon';
import { Spinner } from './Spinner';

afterEach(cleanup);

describe('Icons components', () => {
  test('render Close icon', () => {
    render(<CloseIcon />);
    const icon = screen.getByTestId('close-icon');
    expect(icon).toBeInTheDocument();
  });

  test('render Library icon', () => {
    render(<LibraryIcon />);
    const icon = screen.getByTestId('library-icon');
    expect(icon).toBeInTheDocument();
  });

  test('render Menu icon', () => {
    render(<MenuIcon />);
    const icon = screen.getByTestId('menu-icon');
    expect(icon).toBeInTheDocument();
  });

  test('render Picture icon', () => {
    render(<PictureIcon />);
    const icon = screen.getByTestId('picture-icon');
    expect(icon).toBeInTheDocument();
  });

  test('render Search icon', () => {
    render(<SearchIcon />);
    const icon = screen.getByTestId('search-icon');
    expect(icon).toBeInTheDocument();
  });

  test('render Spinner component', () => {
    render(<Spinner />);
    const icon = screen.getByTestId('spinner-icon');
    expect(icon).toBeInTheDocument();
  });
});
