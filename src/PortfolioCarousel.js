import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function PortfolioCarousel(){
    const handleDragStart = (e) => e.preventDefault();

    const items = [
      <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
      <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
      <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    ];
  
    return(
      <AliceCarousel mouseTracking items={items} />
    );
  }
  
  export default PortfolioCarousel;
