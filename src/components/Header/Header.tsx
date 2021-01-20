import React from 'react';

import { Menu } from '../icons';

export const Header: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <header className="flex flex-row justify-items-auto px-2 py-2 bg-blue-600">
        <Menu color="text-white" />
        <h1 className="text-s ml-2 text-white leading-relaxed">
          Artwork Search
        </h1>
      </header>
    </div>
  );
};
