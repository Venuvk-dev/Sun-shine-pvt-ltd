import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">

      <div className="paddings innerWidth flexCenter c-container">  
            {/* Left site section */}
            <div className="flexColStart c-left">
                <span className="orangeText">Contact us </span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="secondaryText">We always ready to give the best service <br />
                We believe a hygiene place to live make the life better perspiciatis!</span>
                <div className="flexColStart contact-modes">
                    {/* First row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">0778710985</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                <a href="tel:+94778710985">Call Now</a>
                               
                            </div>
                        </div>

                        {/* Second mode */}

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">0778710985</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                               <a href="sms:+94778710985">Chat Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Email</span>
                                    <span className="secondaryText">rvenukanth5@gmail.com</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                               <a href="mailto:rvenukanth5@gmail.com">Email Now</a>
                            </div>
                        </div>

                        {/* Second mode */}

                        {/* <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">0778710985</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                               Call Now
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>


            {/* Right site section */}
            <div className="c-right">
            <div className="image-container">
                <img src="./contact.jpg" alt="image" />
            </div>
            </div>
      </div>
    </section>
  );
};

export default Contact;
