import React from "react";
import {FaTwitter , FaFacebook, FaLinkedin } from 'react-icons/fa'

function Footer(){
    return (
        <div className="footer">
            <p>Created by Theodoros Mastromanolis</p>
            <p >
                <span className="socialsSpan">
                    <a href="https://www.google.com">
                        <FaFacebook />
                    </a>
                </span>
                <span className="socialsSpan">
                    <a href="https://www.google.com">
                        <FaTwitter />
                    </a>
                </span>
                <span className="socialsSpan">
                    <a href="https://www.google.com">
                        <FaLinkedin />
                    </a>
                </span>
            </p>
        </div>
    );
}

export default Footer;