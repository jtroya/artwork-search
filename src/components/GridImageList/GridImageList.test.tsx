import { screen, cleanup } from '@testing-library/react';
import { nanoid } from '@reduxjs/toolkit';

import { render } from '../../test-utils';
import { GridImageList } from './GridImageList';

describe('GridImageList component', () => {
  afterEach(cleanup);

  const mockData = {
    title: 'test title',
    headers: [
      {
        id: 1,
        name: 'title',
      },
      {
        id: 2,
        name: 'artist',
      },
    ],
    data: {
      artObjects: [
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
      ],
      count: 1,
    },
    loading: false,
  };

  test('render the component', () => {
    render(
      <GridImageList
        title={mockData.title}
        headers={mockData.headers}
        data={mockData.data}
        loading={mockData.loading}
      />,
    );

    const cardList = screen.getByTestId('card-list-item');
    const cardWithoutImage = screen.getByTestId('image-placeholder');
    expect(cardList).toBeInTheDocument();
    expect(cardWithoutImage).toBeInTheDocument();
  });

  test('render load more button', () => {
    const getRandomId = () => nanoid(5);
    const randomData = [];
    for (let index = 0; index < 12; index++) {
      randomData.push({ ...mockData.data.artObjects[0], id: getRandomId() });
    }

    const mockDataMore = {
      ...mockData,
      data: { artObjects: [...randomData], count: randomData.length + 10 },
    };

    render(
      <GridImageList
        title={mockData.title}
        headers={mockData.headers}
        data={mockDataMore.data}
        loading={mockData.loading}
      />,
    );
    const loadMore = screen.getByTestId('load-more-button');
    expect(loadMore).toBeInTheDocument();
  });
});
