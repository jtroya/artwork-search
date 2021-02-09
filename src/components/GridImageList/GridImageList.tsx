import React from 'react';

import { CollectionResponseProps } from '../../api';

interface GridImageListProps<T> {
  title?: string;
  headers: Array<{
    name: string;
  }>;
  data: T;
}

export const GridImageList: React.FC<
  GridImageListProps<CollectionResponseProps>
> = ({ title, data }: GridImageListProps<CollectionResponseProps>) => {
  const { artObjects } = data;
  return (
    <div className="p-4">
      <h2 className="pb-4 text-xl tracking-wide">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {artObjects.map(el => (
          <div key={el.id} className="rounded bg-white shadow">
            <section className="p-4">
              <div className="relative pb-2/3">
                {el.hasImage && (
                  <img
                    src={el.headerImage.url}
                    alt={el.title}
                    className="absolute h-full w-full object-cover"
                  />
                )}
                {!el.hasImage && (
                  <div className="absolute h-full w-full bg-gray-300 text-gray-600">
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
      </div>
    </div>
  );
};
