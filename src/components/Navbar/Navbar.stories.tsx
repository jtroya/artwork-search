import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

import { Navbar as NavbarComponent } from './Navbar';
import { store } from '../../store';

export default {
  title: 'Components/Navbar',
  component: NavbarComponent,
  argTypes: {
    items: [],
  },
  decorators: [
    story => <Provider store={store}>{story()}</Provider>,
    story => <MemoryRouter>{story()}</MemoryRouter>,
  ],
} as ComponentMeta<typeof NavbarComponent>;

const Template: ComponentStory<typeof NavbarComponent> = args => (
  <div className="flex bg-blue-200">
    <div className="w-full flex flex-wrap items-center justify-between">
      <NavbarComponent {...args} />
    </div>
  </div>
);

export const Navbar = Template.bind({});
Navbar.args = {
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
