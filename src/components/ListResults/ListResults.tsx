import React from 'react';
import { useSelector } from 'react-redux';

import { getResults } from '../../store/search';
import { Table } from '../Table';

export const ListResults: React.FC = () => {
  const TITLE = 'Artwork';
  const HEADER_TITLES = [
    { id: 1, name: 'Title' },
    { id: 2, name: 'Artist' },
    { id: 3, name: 'Description' },
  ];
  const results = useSelector(getResults);

  return (
    <div className="w-full pb-4 sm:px-4">
      {results.count > 0 && (
        <Table title={TITLE} headers={HEADER_TITLES} data={results} />
      )}
    </div>
  );
};
