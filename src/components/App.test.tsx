import React from 'react';
import { screen, cleanup } from '@testing-library/react';

import { render } from '../test-utils';
import App from './App';

afterEach(cleanup);

describe('App component', () => {
  test('renders App', () => {
    render(<App />);
    const title = screen.getByText(/artwork/i);
    const about = screen.getByText(/about/i);
    const footer = screen.getByText(/footer/i);

    expect(title).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
