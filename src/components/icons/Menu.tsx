import React from 'react';

interface MenuProps {
  color?: string;
}

export const Menu: React.FC<MenuProps> = ({ color }: MenuProps) => {
  return (
    <div className="w-6">
      <svg
        className={`w-6 h-6 ${color}`}
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
    </div>
  );
};
