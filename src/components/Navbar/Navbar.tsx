import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  id: string | number;
  name: string;
  link: string;
}

export interface NavbarProps {
  items: NavItemProps[];
}

export const Navbar: React.FC<NavbarProps> = ({ items }: NavbarProps) => {
  return (
    <React.Fragment>
      <nav className="md:ml-auto md:pr-2 lg:ml-auto">
        <ul className="flex flex-col md:flex-row pl-2 list-none">
          {items.map((opt: NavItemProps) => (
            <li key={opt.id}>
              <NavLink
                className="py-2 px-2 flex items-center hover:opacity-75"
                to={opt.link}
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
