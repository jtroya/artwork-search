import { screen, cleanup } from '@testing-library/react';

import { ArtObjectResponseProps } from '../../api';
import { render } from '../../test-utils';
import { CardList } from './CardList';

afterEach(cleanup);

describe('CardList component', () => {
  const mockData: ArtObjectResponseProps[] = [
    {
      hasImage: false,
      headerImage: {
        guid: '',
        height: 0,
        url: '',
        width: 0,
      },
      id: 'test-123',
      longTitle: 'the long title',
      principalOrFirstMaker: 'anonymous',
      title: 'title test',
    },
  ];

  test('render the component', () => {
    render(<CardList list={mockData} />);
    const list = screen.getByTestId('card-list-item');
    expect(list).toBeInTheDocument();
  });
});
