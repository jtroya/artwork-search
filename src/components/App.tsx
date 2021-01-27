import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <main className="flex flex-col min-h-screen bg-purple-100">
          <Header />
          <div className="flex flex-col flex-1">
            <p>body</p>
          </div>
          <footer className="flex flex-col w-full overflow-hidden bg-blue-600 px-2 py-2 text-gray-300 ">
            <p>Footer</p>
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
