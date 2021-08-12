import React from 'react';
import { useSelector } from 'react-redux';

import { CollectionResponseProps } from '../../api';
import { getCurrentPage, getKeyword, getLoading } from '../../store/search';
import { LoadMoreButton } from '../LoadMoreButton';
import { CardList, CardSkeleton } from '../Card';

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
  const currentPage = useSelector(getCurrentPage);
  const keyword = useSelector(getKeyword);
  const isLoading = useSelector(getLoading);
  const { artObjects, count } = data;
  const totalResults = count > 0 ? `${count} results` : '';
  const hasResults = count > 0;
  const showMoreResults = count > 0 && count > 10 && count > artObjects.length;

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
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};
