import React from 'react';
import { useSelector } from 'react-redux';

import {
  getLoading,
  getResults,
  getNoResults,
  getKeyword,
} from '../../store/search';
import { Table } from '../Table';
import { GridImageList } from '../GridImageList';

export enum ViewStyles {
  Table,
  Grid,
}
interface ListResultsProps {
  viewStyle?: ViewStyles;
}

const NoResultsLayout = () => {
  const keyword = useSelector(getKeyword);
  const isLoading = useSelector(getLoading);

  return (
    <React.Fragment>
      {!isLoading && (
        <div className="w-full h-full container mx-auto px-2 mt-10">
          <div className="text-center">
            <p className="inline-block sm:inline-block sm:align-middle sm:mr-2 text-blue-400">
              <svg
                className="w-10 h-10 object-none object-center"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
            <span className="block sm:inline-block align-middle">
              No results for term: <i className="italic">{keyword}</i>
            </span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

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
  const hasNoResults = useSelector(getNoResults);

  return (
    <div className="w-full pb-4 sm:px-4">
      {viewStyle === ViewStyles.Table &&
        (hasNoResults ? (
          <NoResultsLayout />
        ) : (
          <Table title={TITLE} headers={HEADER_TITLES} data={results} />
        ))}
      {viewStyle === ViewStyles.Grid &&
        (hasNoResults ? (
          <NoResultsLayout />
        ) : (
          <GridImageList
            title={TITLE}
            headers={HEADER_TITLES}
            data={results}
            loading={isLoading}
          />
        ))}
    </div>
  );
};
