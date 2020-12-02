import React from "react";
import "./footbar.css";
import appStore from "./assets/store/app-store.svg";
import playStore from "./assets/store/play-store.svg";
import windowsStore from "./assets/store/windows-store.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="link-line">
        <ul className="links-container">
          <li>Home</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Collection Statement</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
      </div>
      <p className="copyright">
        Copyright 2016 DEMO Streaming All Rights Reserved
      </p>
      <div className="medialine">
        <span className="socialicons">
          <i className="SocialIconFacebook" />
          <i className="SocialIconTwitter" />
          <i className="SocialIconInstagram" />
        </span>
        <span className="storeIcons">
          <img className="storeIcon" alt="" src={appStore} />
          <img className="storeIcon" alt="" src={playStore} />
          <img className="storeIcon" alt="" src={windowsStore} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
