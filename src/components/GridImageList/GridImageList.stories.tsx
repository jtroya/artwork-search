import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import { store } from '../../store';
import { GridImageList } from './GridImageList';

export default {
  title: 'Grid Image List',
  component: GridImageList,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof GridImageList>;

const Template: ComponentStory<typeof GridImageList> = args => (
  <GridImageList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headers: [
    {
      name: 'title',
    },
    {
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
        principalOrFirstMaker: 'Anna Smith',
        title: 'Title test',
      },
      {
        hasImage: true,
        headerImage: {
          guid: 'abc123',
          height: 1080,
          width: 1080,
          url: 'https://source.unsplash.com/random',
        },
        id: 'abc-123',
        longTitle: 'Portrait of John Doe',
        principalOrFirstMaker: 'Luke Smith',
        title: 'Portrait of John Doe',
      },
    ],
    count: 2,
  },
  loading: false,
};
