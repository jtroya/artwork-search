import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { Router } from 'react-router-dom';

import { store } from './store';

const render = (
  ui: React.ReactElement,
  renderOptions?: Omit<RenderOptions, 'queries'>,
) => {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };

// function ReduxProvider({
//   children,
// }: React.ComponentType<any, any, any>): React.ComponentType<any, any, any> {
//   return <Provider<unknown> store={store}>{children}</Provider>;
// }

// const reduxRender = (
//   ui: React.ReactElement,
//   options: Omit<RenderOptions, 'queries'>,
// ) => render(ui, { wrapper: ReduxProvider, ...options });
