import { api } from './api';

export interface ArtObjectResponseProps {
  hasImage: boolean;
  headerImage: {
    guid: string;
    height: number;
    url: string;
    width: string;
  };
  id: string;
  longTitle: string;
  principalOrFirstMaker: string;
  title: string;
}

export interface CollectionResponseProps {
  count: number;
  artObjects: Array<ArtObjectResponseProps>;
}

export const getCollection = (
  search: string,
  page = 1,
): Promise<CollectionResponseProps> => {
  const RESULTS_PER_PAGE = process.env.REACT_APP_RESULTS_PER_PAGE;
  const URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const endPoint = `${URL}/collection?key=${API_KEY}&q=${search}&format=json&ps=${RESULTS_PER_PAGE}&p=${page}`;

  return api(endPoint)
    .then(res => {
      const { count, artObjects } = res as CollectionResponseProps;
      const result = Object.assign(
        {},
        {
          count: count,
          artObjects: artObjects.map(
            ({
              hasImage,
              headerImage,
              id,
              longTitle,
              principalOrFirstMaker,
              title,
            }) => ({
              hasImage: hasImage,
              headerImage: {
                guid: headerImage.guid,
                height: headerImage.height,
                url: headerImage.url,
                width: headerImage.width,
              },
              id,
              longTitle,
              principalOrFirstMaker,
              title,
            }),
          ),
        },
      );
      return result;
    })
    .then(r => r)
    .catch(error =>
      console.error('Error calling service', error),
    ) as Promise<CollectionResponseProps>;
};
