import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header as HeaderComponent } from './Header';
import { store } from '../../store';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  argTypes: {
    menuItems: [],
  },
  decorators: [
    story => <Provider store={store}>{story()}</Provider>,
    story => <MemoryRouter>{story()}</MemoryRouter>,
  ],
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = args => (
  <HeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
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
