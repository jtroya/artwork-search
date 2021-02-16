import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrentPage,
  getKeyword,
  getLoading,
  searchKeyword,
} from '../../store/search';
import { Spinner } from '../icons';

export const LoadMoreButton: React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const keyword = useSelector(getKeyword);
  const isLoading = useSelector(getLoading);

  return (
    <button
      type="button"
      onClick={() => dispatch(searchKeyword(keyword, currentPage + 1))}
      className="inline-flex justify-center py-1 px-2 w-2/3 sm:w-1/4 bg-blue-300 rounded text-white focus:outline-none focus:ring focus:border-blue-400"
      disabled={isLoading}
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
