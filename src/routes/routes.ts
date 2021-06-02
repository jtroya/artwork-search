import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ROOT, ABOUT } from './paths';
import pages from '../pages';

export interface RouterProps {
  component: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string;
}

export const SEARCH_PAGE: RouterProps = {
  component: pages.SearchPage,
  path: ROOT,
};

export const ABOUT_PAGE: RouterProps = {
  component: pages.AboutPage,
  path: ABOUT,
};

export const routes = [ABOUT_PAGE, SEARCH_PAGE];
