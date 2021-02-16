import React from 'react';

import { CollectionResponseProps, ArtObjectResponseProps } from '../../api';
import { LoadMoreButton } from '../LoadMoreButton';

interface GridImageListProps<T> {
  title?: string;
  headers: Array<{
    name: string;
  }>;
  data: T;
  loading: boolean;
}

interface CardListProps<T> {
  list: Array<T>;
}

interface SkeletonProps {
  items: number;
}

const CardSkeleton = ({ items }: SkeletonProps) => {
  const cards = new Array(items).fill(null);
  return (
    <React.Fragment>
      {cards.map((_, index: number) => (
        <div key={index} className="rounded bg-white shadow">
          <section className="p-4">
            <div className="relative aspect-w-16 aspect-h-9 animate-pulse">
              <div className="absolute object-cover h-full w-full bg-gray-300 rounded"></div>
            </div>
            <div className="h-3 w-2/3 mt-3 animate-pulse">
              <div className="h-full bg-gray-300 rounded"></div>
            </div>
            <div className="h-3 w-4/5 mt-2 animate-pulse">
              <div className="h-full bg-gray-300 rounded"></div>
            </div>
          </section>
        </div>
      ))}
    </React.Fragment>
  );
};

const CardList = ({ list }: CardListProps<ArtObjectResponseProps>) => {
  return (
    <React.Fragment>
      {list.map(el => (
        <div key={el.id} className="rounded bg-white shadow">
          <section className="p-4">
            <div className="relative aspect-w-16 aspect-h-9">
              {el.hasImage && (
                <img
                  src={el.headerImage.url}
                  alt={el.title}
                  className="absolute object-cover h-full w-full rounded"
                />
              )}
              {!el.hasImage && (
                <div className="absolute h-full w-full bg-gray-300 text-gray-600 rounded">
                  <svg
                    className="w-full h-full"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <h3
              className="text-base font-bold leading-tight line-clamp-2 pt-2"
              title={el.title}
            >
              {el.title}
            </h3>
            <p className="text-sm tracking-normal text-gray-600">
              {el.principalOrFirstMaker}
            </p>
          </section>
        </div>
      ))}
    </React.Fragment>
  );
};

export const GridImageList: React.FC<
  GridImageListProps<CollectionResponseProps>
> = ({
  data,
  loading = false,
}: GridImageListProps<CollectionResponseProps>) => {
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
          <LoadMoreButton />
        </div>
      )}
    </div>
  );
};
