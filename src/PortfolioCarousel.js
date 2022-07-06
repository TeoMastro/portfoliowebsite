import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./App.css";
import {MarkGithubIcon} from '@primer/octicons-react';

function PortfolioCarousel(){
    return(
      <Carousel className="CarouselProperties">
        <div>
        <p className="carouselTitle">Imdb Clone</p>
          <a href="https://github.com">
            <MarkGithubIcon className="carouselImageButton" fill="#f00" size={150} />
          </a>
          <p className="carouselDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div>
          <p className="carouselTitle">Rating System</p>
          <a href="https://github.com">
              <MarkGithubIcon fill="#f00" size={100} />
          </a>
          <p className="carouselDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 
        </div>
        <div>
          <p className="carouselTitle">Rating System</p>
          <a href="https://github.com">
              <MarkGithubIcon fill="#f00" size={100} />
          </a>
          <p className="carouselDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 
        </div>
        <div>
          <p className="carouselTitle">Troll System</p>
          <a href="https://github.com">
              <MarkGithubIcon fill="#f00" size={100} />
          </a>
          <p className="carouselDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 
        </div>
      </Carousel>
    );
  }
  
  export default PortfolioCarousel;
