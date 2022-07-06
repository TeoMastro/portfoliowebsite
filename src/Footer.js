import React from "react";
import {FaTwitter , FaFacebook, FaLinkedin } from 'react-icons/fa'

function Footer(){
    return (
        <div className="footer">
            <p>Created by Theodoros Mastromanolis</p>
            <p >
                <a href="https://www.google.com">
                    <FaFacebook />
                </a>
                <a href="https://www.google.com">
                    <FaTwitter />
                </a>
                <a href="https://www.google.com">
                    <FaLinkedin />
                </a>
            </p>
        </div>
    );
}

export default Footer;