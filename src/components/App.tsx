import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <Header />
        <aside>nav menu</aside>
        <main className="w-full overflow-hidden min-h-screen bg-purple-100">
          <p>body</p>
        </main>
        <footer className="w-full overflow-hidden bg-blue-600 px-2 py-2">
          <p>Footer</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
