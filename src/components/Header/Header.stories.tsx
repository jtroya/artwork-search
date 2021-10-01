import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './Header';
import { store } from '../../store';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    menuItems: [],
  },
  decorators: [
    story => <Provider store={store}>{story()}</Provider>,
    story => <MemoryRouter>{story()}</MemoryRouter>,
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  appName: 'Artwork',
  menuItems: [
    {
      id: '1',
      name: 'Login',
      link: '/login',
    },
    {
      id: '2',
      name: 'About',
      link: '/about',
    },
  ],
};
