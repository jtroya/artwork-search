import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { getNoResults, getKeyword } from '../../store/search';
import { Table } from '../Table';
import { GridImageList } from '../GridImageList';
import {
  getErrorSearch,
  getLoading,
  getResults,
} from '../../store/searchSlice';
import { useAppSelector } from '../../hooks';

export enum ViewStyles {
  Table,
  Grid,
}
interface ListResultsProps {
  viewStyle?: ViewStyles;
}

const NoResultsLayout = () => {
  const keyword = useAppSelector(getKeyword);
  const isLoading = useAppSelector(getLoading);

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

function errorFallback(message: string): React.ReactElement {
  return (
    <div>
      <h2>We have a problem</h2>
      <pre>{message}</pre>
    </div>
  );
}

export const ListResults: React.FunctionComponent<ListResultsProps> = ({
  viewStyle = ViewStyles.Grid,
}) => {
  const TITLE = 'Artwork';
  const HEADER_TITLES = [
    { id: 1, name: 'Title' },
    { id: 2, name: 'Artist' },
    { id: 3, name: 'Description' },
  ];
  const results = useAppSelector(getResults);
  const isLoading = useAppSelector(getLoading);
  const hasNoResults = useAppSelector(getNoResults);

  const isError = useAppSelector(state => state.search.error.state);
  const getErrorMessage = useAppSelector(getErrorSearch);

  React.useLayoutEffect(() => {
    if (isError) {
      console.log('Error', getErrorMessage);
    }
  }, [getErrorMessage, isError]);

  return (
    <div data-testid="list-results" className="w-full pb-4 sm:px-4">
      {hasNoResults && <NoResultsLayout />}
      {viewStyle === ViewStyles.Table && (
        <ErrorBoundary fallback={errorFallback(getErrorMessage)}>
          <Table title={TITLE} headers={HEADER_TITLES} data={results} />
        </ErrorBoundary>
      )}
      {viewStyle === ViewStyles.Grid && (
        <ErrorBoundary fallback={errorFallback(getErrorMessage)}>
          <GridImageList
            title={TITLE}
            headers={HEADER_TITLES}
            data={results}
            loading={isLoading}
          />
        </ErrorBoundary>
      )}
    </div>
  );
};
