import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <main className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <div className="flex flex-col flex-1">
            <Route exact path="/" component={() => <h2>home</h2>} />
            <Route path="/about" component={() => <h2>About</h2>} />
          </div>
          <footer className="flex flex-col w-full overflow-hidden bg-blue-200 px-2 py-2 text-gray-100 ">
            <p>Footer</p>
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
