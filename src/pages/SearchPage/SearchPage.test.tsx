import React from 'react';
import { screen, cleanup } from '@testing-library/react';

import { render } from '../../test-utils';
import { SearchPage } from './SearchPage';

afterEach(cleanup);

describe('SearchPage component', () => {
  test('render Searchbox and ListResults components', () => {
    render(<SearchPage />);
    const inputSearch = screen.getByTestId('search-input');
    const buttonSearch = screen.getByTestId('submit-search');
    const listResults = screen.getByTestId('list-results');
    expect(inputSearch).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
    expect(listResults).toBeInTheDocument();
  });
});
