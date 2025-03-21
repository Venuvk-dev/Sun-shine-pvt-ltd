import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
<div className="footer">
<section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="logo" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            2nd lane, Katpagapuram, Vavuniya
          </span>
          <div className="flexCenter f-menu">
            <span>
              <Link to="residencies" smooth={true} duration={500}>
                Residencies
              </Link>
            </span>
            <span>
              <Link to="value" smooth={true} duration={500}>
                Our Value
              </Link>
            </span>
            <span>
              <Link to="contact" smooth={true} duration={500}>
                Contact Us
              </Link>
            </span>
            <span>
              <Link to="contactForm" smooth={true} duration={500}>
                Get Started
              </Link>
            </span>
          </div>
        </div>
      
      </div>
    </section>
    <div className="copy-rights">
    <h3>&copy; Powered by V Tech</h3>
    
    </div>
</div>
  );
};

export default Footer;
