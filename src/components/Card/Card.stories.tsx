import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import { Card } from './Card';
import { store } from '../../store';

export default {
  title: 'Card',
  component: Card,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const NoImage = Template.bind({});
NoImage.args = {
  id: '123',
  imgUrl: '',
  title: 'Portrait of John Doe',
  description:
    'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
};

export const WithImage = Template.bind({});
WithImage.args = {
  id: 'abc123',
  imgUrl: 'https://source.unsplash.com/random',
  title: 'Portrait of John Doe',
  description:
    'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
};
