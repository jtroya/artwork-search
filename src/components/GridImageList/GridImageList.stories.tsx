import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import { store } from '../../store';
import { GridImageList as GridImageComponent } from './GridImageList';

export default {
  title: 'Components/Grid Image List',
  component: GridImageComponent,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof GridImageComponent>;

const Template: ComponentStory<typeof GridImageComponent> = args => (
  <GridImageComponent {...args} />
);

export const GridImageList = Template.bind({});
GridImageList.args = {
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
