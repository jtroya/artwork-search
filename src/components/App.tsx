import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Header } from './Header';
import { AppRoutes, routes } from '../routes';

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <div className="flex flex-col">
          <main className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex flex-col flex-1">
              <Switch>
                {routes.map(route => (
                  <AppRoutes
                    key={route.path}
                    path={route.path}
                    component={route.component}
                  />
                ))}
              </Switch>
            </div>
            <footer className="flex flex-col w-full overflow-hidden bg-blue-200 px-4 py-2 text-gray-100 ">
              <p>Footer</p>
            </footer>
          </main>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
