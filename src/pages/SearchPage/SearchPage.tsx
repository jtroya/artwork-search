import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ListResults } from '../../components/ListResults';
import { SearchBox } from '../../components/SearchBox';
import { useAppSelector } from '../../hooks';
import { getErrorSearch } from '../../store/searchSlice';

function ErrorFallback(message: string): React.ReactElement {
  return (
    <div role="alert" className="block text-center mt-4 bg-blue-200">
      <h2 className="text-gray-100">We have a problem</h2>
      <pre>{message}</pre>
    </div>
  );
}

export const SearchPage: React.FC = () => {
  const isError = useAppSelector(state => state.search.error.state);
  const getErrorMessage = useAppSelector(getErrorSearch);

  React.useLayoutEffect(() => {
    if (isError) {
      console.log('Error Layout', getErrorMessage);
    }
  }, [getErrorMessage, isError]);

  return (
    <div className="flex flex-col">
      <div className="block sm:flex sm:justify-center p-4">
        <div className="w-full sm:w-2/5">
          <SearchBox />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <ErrorBoundary fallback={ErrorFallback(getErrorMessage)}>
          <ListResults />
        </ErrorBoundary>
      </div>
    </div>
  );
};
