import React from 'react';

interface MenuIconProps {
  color?: string;
}

export const MenuIcon: React.FC<MenuIconProps> = () => {
  return (
    <svg
      data-testid="menu-icon"
      className="fill-current"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
};
