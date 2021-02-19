import React from 'react';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { store } from './store';

const reduxRender = (
  ui: React.ReactElement,
  renderOptions?: Omit<RenderOptions, 'queries'>,
): React.ReactNode => {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { reduxRender as render };
