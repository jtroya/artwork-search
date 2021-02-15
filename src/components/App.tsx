import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './Header';
import { SearchPage } from './SearchPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <main className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <div className="flex flex-col flex-1">
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/about" component={() => <h3>About</h3>} />
          </div>
          <footer className="flex flex-col w-full overflow-hidden bg-blue-200 px-4 py-2 text-gray-100 ">
            <p>Footer</p>
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
