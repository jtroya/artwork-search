import React from 'react';
import { useSelector } from 'react-redux';

import { getLoading, getResults } from '../../store/search';
import { Table } from '../Table';
import { GridImageList } from '../GridImageList';

export enum ViewStyles {
  Table,
  Grid,
}
interface ListResultsProps {
  viewStyle?: ViewStyles;
}

export const ListResults: React.FC<ListResultsProps> = ({
  viewStyle = ViewStyles.Grid,
}: ListResultsProps) => {
  const TITLE = 'Artwork';
  const HEADER_TITLES = [
    { id: 1, name: 'Title' },
    { id: 2, name: 'Artist' },
    { id: 3, name: 'Description' },
  ];
  const results = useSelector(getResults);
  const isLoading = useSelector(getLoading);

  return (
    <div className="w-full pb-4 sm:px-4">
      {viewStyle === ViewStyles.Table && results.count > 0 && (
        <Table title={TITLE} headers={HEADER_TITLES} data={results} />
      )}
      {viewStyle === ViewStyles.Grid && (
        <GridImageList
          title={TITLE}
          headers={HEADER_TITLES}
          data={results}
          loading={isLoading}
        />
      )}
    </div>
  );
};
