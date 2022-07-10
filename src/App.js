import './App.css';
import React from 'react';
import NavBarMenu from './NavBarMenu';
import PortfolioCarousel from './PortfolioCarousel';
import Bio from './Bio';
import Footer from './Footer';
import CV from './Cv';

function App() {
  return (
      <>
        <div className='divNav'>
          <NavBarMenu/>
        </div>
        <div className='divBio'>
          <Bio/>
        </div>
        <div className='divCarousel'>
          <PortfolioCarousel/>
        </div>
        <div>
          <CV/>
        </div>
        <div>
          <Footer/>
        </div>
      </>
  );
}

export default App;
