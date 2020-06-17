import React from 'react';
import { Header, Footer } from './components/layout'
import { Home } from './components/pages'

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <div className="main-container">
        <Home />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
