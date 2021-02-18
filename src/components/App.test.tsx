import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import { store } from '../store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const title = screen.getByText(/artwork/i);
  const about = screen.getByText(/about/i);

  expect(title).toBeInTheDocument();
  expect(about).toBeInTheDocument();
});
