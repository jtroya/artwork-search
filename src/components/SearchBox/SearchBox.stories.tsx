import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import { SearchBox } from './SearchBox';
import { store } from '../../store';

export default {
  title: 'Search box',
  component: SearchBox,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = args => (
  <SearchBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter a term',
};
