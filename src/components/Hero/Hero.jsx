import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth  hero-container">
        {/* Left side */}
        <div className=" flexColStart hero-left">
          {/* orange circle */}
          <div className="orange-circle" />
          <div className="hero-title">
            <motion.h1
            initial={{y:"2rem", opacity:"0"}}
            animate={{y:0, opacity:"1"}}
            transition={{
              duration:4,
              type:"spring"
            }}>
              Discover <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="hero-des">
            <span>Lorem ipsum Ratione ut sunt similique incidunt neque?</span>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={80} end={100} duration={6} />
                <span>+</span>
              </span>
              <span>Premium products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={160} end={200} duration={6} />
                <span>+</span>
              </span>
              <span>Completed Services</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={35} duration={6} />
                <span>+</span>
              </span>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className=" flexCenter hero-right">
          <motion.div className="image-container"
          initial={{x:"7rem",opacity:"0"}}
          animate={{x:0,opacity:1}}
          transition={{duration:2, type:"spring"}}>
            {/* <img src="./pink.jpg" alt="" /> */}
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
