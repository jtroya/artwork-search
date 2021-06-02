import { lazy } from 'react';

const SearchPage = lazy(() => import('./SearchPage'));
const AboutPage = lazy(() => import('./AboutPage'));

export default {
  SearchPage,
  AboutPage,
};
