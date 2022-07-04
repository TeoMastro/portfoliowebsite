import './App.css';
import React from 'react';
import NavBarMenu from './NavBarMenu';
import PortfolioCarousel from './PortfolioCarousel';

function App() {
  return (
      <>
        <div>
          <NavBarMenu/>
        </div>
        <div>
          <PortfolioCarousel/>
        </div>
      </>
  );
}

export default App;
