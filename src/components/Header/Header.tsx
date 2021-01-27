import React from 'react';

import { MenuIcon, CloseIcon } from '../icons';

export const Header: React.FC = () => {
  const [isClosed, setClosed] = React.useState(true);
  const handleClose = () => setClosed(!isClosed);

  return (
    <div className="">
      <header className="flex bg-blue-600">
        <div className="w-full flex flex-wrap items-center justify-between">
          <div className="w-full pl-4 flex justify-between md:w-auto md:static md:block md:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#"
            >
              <span className="text-white text-m pt-1">Artwork</span>
            </a>
            <button
              className="w-6 p-1 text-gray-100 cursor-pointer leading-none focus:text-white focus:outline-none block md:hidden"
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
            <nav className="md:ml-auto md:pr-2 lg:ml-auto">
              <ul className="flex flex-col md:flex-row pl-2 list-none">
                <li>
                  <a
                    className="py-2 px-2 flex items-center hover:opacity-75"
                    href="#"
                  >
                    <span className="text-xs uppercase font-bold text-white">
                      About
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
