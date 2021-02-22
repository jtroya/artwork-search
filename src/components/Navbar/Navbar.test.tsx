import React from 'react';
import { screen, cleanup, fireEvent } from '@testing-library/react';

import { render } from '../../test-utils';
import { Navbar } from './Navbar';

afterEach(cleanup);

describe('Navbar component', () => {
  test('render Navbar component', () => {
    const handleFn = jest.fn();
    const testNavItems = [
      {
        id: 1,
        name: 'item 1',
        link: 'link-1',
      },
      {
        id: 2,
        name: 'item 2',
        link: 'link-2',
      },
    ];
    render(<Navbar items={testNavItems} handleClick={handleFn} />);
    const item1 = screen.getByText(/item 1/i);
    const item2 = screen.getByText(/item 2/i);
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    fireEvent.click(item1);
    fireEvent.click(item2);
    expect(handleFn).toBeCalledTimes(2);
  });
});
