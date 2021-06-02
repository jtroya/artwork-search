import React from 'react';

import { ListResults } from '../../components/ListResults';
import { SearchBox } from '../../components/SearchBox';

export const SearchPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="block sm:flex sm:justify-center p-4">
        <div className="w-full sm:w-2/5">
          <SearchBox />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <ListResults />
      </div>
    </div>
  );
};
