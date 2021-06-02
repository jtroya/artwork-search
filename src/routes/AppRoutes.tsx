import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface AppRouteProps {
  component: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string;
}

export const AppRoutes: React.FC<AppRouteProps> = ({
  component: Component,
  path,
  ...props
}: AppRouteProps) => (
  <Route
    exact
    path={path}
    render={props => <Component {...props} />}
    {...props}
  />
);
