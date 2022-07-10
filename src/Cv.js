import React from "react";
import "./App.css"
import {BsFillFilePdfFill } from 'react-icons/bs'


function CV(){
    return(
        <div className="cvDiv">
            <p className="CVTitle">Download My CV here</p>
            <div className="pdfImage">
                <a href="https://www.google.com"><BsFillFilePdfFill color="white" size="8em" /></a>
            </div>
        </div>
    );
}

export default CV;