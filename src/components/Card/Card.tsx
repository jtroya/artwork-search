import React from 'react';

export interface CardProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({
  id,
  imgUrl,
  title,
  description,
}: CardProps) => {
  return (
    <section className="p-4">
      <div className="relative aspect-w-16 aspect-h-9">
        {imgUrl && (
          <img
            src={imgUrl}
            alt={title}
            className="absolute object-cover h-full w-full rounded"
            data-testid={id}
          />
        )}
        {!imgUrl && (
          <div className="absolute h-full w-full bg-gray-300 text-gray-600 rounded">
            <svg
              className="w-full h-full"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-testid="image-placeholder"
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
        data-testid="title-card"
        title={title}
      >
        {title}
      </h3>
      <p
        className="text-sm tracking-normal text-gray-600"
        data-testid="description-card"
      >
        {description}
      </p>
    </section>
  );
};
