import React from 'react';

import { CollectionResponseProps } from '../../api';
import { LoadMoreButton } from '../LoadMoreButton';
import { CardList, CardSkeleton } from '../Card';
import { useAppSelector } from '../../hooks';
import { getKeyword, getCurrentPage } from '../../store/searchSlice';

export interface GridImageListProps<T> {
  title?: string;
  headers: Array<{
    name: string;
  }>;
  data: T;
  loading: boolean;
}

export const GridImageList: React.FC<
  GridImageListProps<CollectionResponseProps>
> = ({ data, loading = false }) => {
  const currentPage = useAppSelector(getCurrentPage);
  const keyword = useAppSelector(getKeyword);

  const { artObjects, count } = data;
  const totalResults = count > 0 ? `${count} results` : '';
  const hasResults = count > 0;
  const RESULTS_PER_PAGE = parseInt(
    process.env.REACT_APP_RESULTS_PER_PAGE || '10',
    10,
  );
  const showMoreResults =
    count > 0 && count > RESULTS_PER_PAGE && count > artObjects.length;

  return (
    <div className="p-4">
      <h2 className="pb-4 text-lg tracking-wide">{totalResults}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {loading && !showMoreResults ? (
          <CardSkeleton items={10} />
        ) : (
          hasResults && <CardList list={artObjects} />
        )}
      </div>
      {showMoreResults && (
        <div className="block text-center mt-4">
          <LoadMoreButton
            page={currentPage}
            keyword={keyword}
            isLoading={loading}
          />
        </div>
      )}
    </div>
  );
};
