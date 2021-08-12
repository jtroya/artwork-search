import { screen, cleanup } from '@testing-library/react';

import { render } from '../../test-utils';
import { CardSkeleton } from './CardSkeleton';

afterEach(cleanup);

describe('CardSkeleton component', () => {
  test('render the component', () => {
    render(<CardSkeleton items={1} />);
    const component = screen.getByTestId('card-skeleton-0');
    expect(component).toBeInTheDocument();
  });
});
