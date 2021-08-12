import React from 'react';

export interface SkeletonProps {
  items: number;
}

export const CardSkeleton: React.FC<SkeletonProps> = ({ items = 1 }) => {
  const cards = new Array(items).fill(null);
  return (
    <React.Fragment>
      {cards.map((_, index: number) => (
        <div
          key={index}
          className="rounded bg-white shadow"
          data-testid={`card-skeleton-${index}`}
        >
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
