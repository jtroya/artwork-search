import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuIcon, CloseIcon } from '../icons';
import { Navbar, NavItemProps } from '../Navbar';
import { ABOUT } from '../../routes';

interface HeaderProps {
  appName?: string;
  menuItems?: NavItemProps[];
}

const defaultMenuItems: NavItemProps[] = [
  {
    id: 'about',
    name: 'About',
    link: ABOUT,
  },
];

export const Header: React.VFC<HeaderProps> = ({
  menuItems = defaultMenuItems,
  appName = 'Artwork',
}) => {
  const [isClosed, setClosed] = React.useState(true);
  const handleClose = () => setClosed(!isClosed);

  return (
    <header className="flex bg-blue-200">
      <div className="w-full flex flex-wrap items-center justify-between">
        <div className="w-full pl-4 flex justify-between md:w-auto md:static md:block md:justify-start">
          <NavLink
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
            to="/"
          >
            <span className="text-white text-m pt-1">{appName}</span>
          </NavLink>
          <button
            className="w-7 p-0 mr-3 text-blue-100 cursor-pointer leading-none focus:outline-none block md:hidden"
            aria-label="Close menu"
            type="button"
            title="Close menu"
            onClick={handleClose}
          >
            {isClosed && <MenuIcon />}
            {!isClosed && <CloseIcon />}
          </button>
        </div>
        <div
          className={
            'md:flex flex-grow items-center' + (isClosed ? ' hidden' : 'flex')
          }
        >
          <Navbar items={menuItems} handleClick={handleClose} />
        </div>
      </div>
    </header>
  );
};
