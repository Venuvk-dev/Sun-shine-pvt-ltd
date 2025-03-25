import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <Link
              to="residencies"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Residencies
            </Link>
            <Link
              to="value"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Our Value
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Contact Us
            </Link>
            <Link
              to="contactForm"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Get Started
            </Link>
            <button className="button">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpened(false)}
              >
                Contact
              </Link>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
      <div className="rule"></div>
    </section>
    
  );
};

export default Header;
