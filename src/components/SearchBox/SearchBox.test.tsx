import React from 'react';
import { screen, cleanup, fireEvent } from '@testing-library/react';

import { render } from '../../test-utils';
import { SearchBox } from './SearchBox';

afterEach(cleanup);

describe('SearchBox component', () => {
  test('render input and button', () => {
    render(<SearchBox />);
    const inputField = screen.getByTestId('search-input');
    const buttonSubmit = screen.getByTestId('submit-search');
    expect(inputField).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();
  });

  test('handle changes on input field and submit', () => {
    render(<SearchBox />);
    const inputField = screen.getByTestId('search-input');
    const buttonSubmit = screen.getByTestId('submit-search');
    fireEvent.change(inputField, { target: { value: '12' } });
    expect(buttonSubmit).toBeDisabled();
    fireEvent.change(inputField, { target: { value: 'test abc' } });
    expect(buttonSubmit).not.toBeDisabled();
  });

  test('handle submit search term', () => {
    render(<SearchBox />);
    const inputField = screen.getByTestId('search-input');
    const buttonSubmit = screen.getByTestId('submit-search');
    fireEvent.change(inputField, { target: { value: 'test abc' } });
    fireEvent.click(buttonSubmit);
    const spinnerIcon = screen.getByTestId('spinner-icon');
    expect(spinnerIcon).toBeInTheDocument();
  });
});
