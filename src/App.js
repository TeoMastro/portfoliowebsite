import './App.css';
import React from 'react';
import NavBarMenu from './NavBarMenu';
import PortfolioCarousel from './PortfolioCarousel';
import Bio from './Bio';

function App() {
  return (
      <>
        <div className='divNav'>
          <NavBarMenu/>
        </div>
        <div>
          <Bio/>
        </div>
        <div className='divCarousel'>
          <PortfolioCarousel/>
        </div>
      </>
  );
}

export default App;
