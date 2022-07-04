import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./App.css";
import {MarkGithubIcon} from '@primer/octicons-react';

import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.png"

function PortfolioCarousel(){
    return(
      <Carousel className="CarouselProperties">
        <div>
          <img src={img1}  />
          <a href="https://github.com">
            <MarkGithubIcon fill="#f00" size={100} />
          </a>
          <p className="legend">Imdb Clone</p>
        </div>
        <div>
          <img src={img2}  />
          <p className="legend">Rating System</p>
        </div>
        <div>
          <img src={img3}  />
          <p className="legend">Machine Learning</p>
        </div>
      </Carousel>
    );
  }
  
  export default PortfolioCarousel;
