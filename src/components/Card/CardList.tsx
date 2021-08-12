import React from 'react';

import { Card } from './Card';
import { ArtObjectResponseProps } from '../../api';

export interface CardListProps<T> {
  list: Array<T>;
}

export const CardList: React.FC<CardListProps<ArtObjectResponseProps>> = ({
  list,
}) => {
  return (
    <React.Fragment>
      {list.map(el => (
        <div
          key={el.id}
          className="rounded bg-white shadow"
          data-testid="card-list-item"
        >
          <Card
            id={el.id}
            imgUrl={el.headerImage.url}
            title={el.title}
            description={el.principalOrFirstMaker}
          />
        </div>
      ))}
    </React.Fragment>
  );
};
