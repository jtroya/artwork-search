import { screen, cleanup } from '@testing-library/react';

import { render } from '../../test-utils';
import { Card, CardProps } from './Card';

afterEach(cleanup);

describe('Card component', () => {
  const mockData: CardProps = {
    id: 'test-id-1',
    imgUrl: 'path/to/img',
    title: 'test title',
    description: 'test description',
  };

  test('render the component', () => {
    render(<Card {...mockData} />);
    const cardId = screen.getByTestId('test-id-1');
    const title = screen.getByTestId('title-card');
    const desc = screen.getByTestId('description-card');

    expect(cardId).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  test('render image placeholder', () => {
    const cardWithNoImage: CardProps = {
      ...mockData,
      imgUrl: '',
    };
    render(<Card {...cardWithNoImage} />);
    const imgCard = screen.getByTestId('image-placeholder');
    const title = screen.getByTestId('title-card');
    const desc = screen.getByTestId('description-card');

    expect(imgCard).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });
});
