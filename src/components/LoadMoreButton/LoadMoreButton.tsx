import React from 'react';
import { useDispatch } from 'react-redux';

import { searchKeyword } from '../../store/search';
import { Spinner } from '../icons';

interface LoadMoreProps {
  page: number;
  keyword: string;
  isLoading: boolean;
}

export const LoadMoreButton: React.FC<LoadMoreProps> = ({
  page,
  keyword,
  isLoading,
}: LoadMoreProps) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(searchKeyword(keyword, page + 1))}
      className="inline-flex justify-center py-1 px-2 w-2/3 sm:w-1/4 bg-blue-300 rounded text-white focus:outline-none focus:ring focus:border-blue-400"
      disabled={isLoading}
      data-testid="load-more-button"
    >
      {isLoading ? (
        <React.Fragment>
          <span className="mr-2 pt-0.5">
            <Spinner />
          </span>
          Loading...
        </React.Fragment>
      ) : (
        <React.Fragment>Load more</React.Fragment>
      )}
    </button>
  );
};
