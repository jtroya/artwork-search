import React from 'react';
import { screen, cleanup } from '@testing-library/react';

import { render } from '../../test-utils';
import { LoadMoreButton } from './LoadMoreButton';

afterEach(cleanup);

describe('LoadMoreButton component', () => {
  test('render component', () => {
    render(<LoadMoreButton page={1} keyword="test" isLoading={false} />);
    const button = screen.getByTestId('load-more-button');
    const textLoadMore = screen.getByText(/load more/i);

    expect(button).toBeInTheDocument();
    expect(textLoadMore).toBeInTheDocument();
  });

  test('render Loading text', () => {
    render(<LoadMoreButton page={1} keyword="test" isLoading={true} />);
    const button = screen.getByTestId('load-more-button');
    const textLoading = screen.getByText(/loading/i);
    const spinner = screen.getByTestId('spinner-icon');

    expect(button).toBeInTheDocument();
    expect(textLoading).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });
});
