import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import { SearchBox as SearchComponent } from './SearchBox';
import { store } from '../../store';

export default {
  title: 'Components/Searchbox',
  component: SearchComponent,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof SearchComponent>;

const Template: ComponentStory<typeof SearchComponent> = args => (
  <SearchComponent {...args} />
);

export const Searchbox = Template.bind({});
Searchbox.args = {
  placeholder: 'Enter a term',
};
