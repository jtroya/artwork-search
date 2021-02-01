import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  id: string | number;
  name: string;
  link: string;
}

export interface NavbarProps {
  items: NavItemProps[];
  handleClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  items,
  handleClick,
}: NavbarProps) => {
  return (
    <React.Fragment>
      <nav className="md:ml-auto md:pr-2 lg:ml-auto">
        <ul className="flex flex-col md:flex-row sm:pl-0 md:pl-2 list-none">
          {items.map((opt: NavItemProps) => (
            <li key={opt.id} className="ml-2 p-2 md:ml-0">
              <NavLink
                className="flex items-center hover:opacity-75"
                to={opt.link}
                onClick={handleClick}
              >
                <span className="text-xs uppercase font-bold text-white">
                  {opt.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};
