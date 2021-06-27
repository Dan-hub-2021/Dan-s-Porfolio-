import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
  <div className="social-container">    
    <a href="https://www.linkedin.com/in/dan-sy-a68a8320a" className="linkedin social">
    <FontAwesomeIcon icon={faLinkedin} size="3x" />
    </a>
    <a href="https://www.facebook.com/dan.sy1" className="facebook social">
    <FontAwesomeIcon icon={faFacebook} size="3x" />
    </a>
    <a href="https://github.com/Dan-hub-2021" className="github social">
    <FontAwesomeIcon icon={faGithub} size="3x" />
    </a>
    <a href="https://www.instagram.com/dnts2013/"className="instagram social">
    <FontAwesomeIcon icon={faInstagram} size="3x" />
    </a>
  </div>  
  );
}

