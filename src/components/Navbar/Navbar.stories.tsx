import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

import { Navbar } from './Navbar';
import { store } from '../../store';

export default {
  title: 'Navigation bar',
  component: Navbar,
  argTypes: {
    items: [],
  },
  decorators: [
    story => <Provider store={store}>{story()}</Provider>,
    story => <MemoryRouter>{story()}</MemoryRouter>,
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = args => (
  <div className="flex bg-blue-200">
    <div className="w-full flex flex-wrap items-center justify-between">
      <Navbar {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: '1',
      name: 'About',
      link: '/about',
    },
    {
      id: '2',
      name: 'Login',
      link: '/login',
    },
  ],
};
