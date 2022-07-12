import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./App.css";
import {MarkGithubIcon} from '@primer/octicons-react';

function PortfolioCarousel(){
    const [size, setSize] = useState([]);
    const [flag,setFlag] = useState(false);

    //function to update size of Github Image
    function updateSize(){
      if(window.innerWidth<1000){
        setSize(100);
      }
      else{
        setSize(150);
      }
    }

    if (flag==false) {
      updateSize();
      setFlag(true);
    }
    else{
      window.addEventListener('resize',updateSize);
    }
    
    return(
      <Carousel className="CarouselProperties" showThumbs={false}>
        <div>
        <p className="carouselTitle">Imdb Clone</p>
          <a href="https://github.com">
            <MarkGithubIcon className="carouselImageButton" fill="#000B14" size={size} />
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
