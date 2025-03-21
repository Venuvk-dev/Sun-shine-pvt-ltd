import React from "react";
import { Element } from "react-scroll";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import ContactForm from "./components/Contactform/Contactform";

function App() {
  return (
    <div className="app">
        <Header />
        <Hero />
      <Companies />
      <Element name="residencies">
        <Residencies />
      </Element>
      <Element name="value">
        <Value />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="get-started">
        <GetStarted />
      </Element>
      <div id="contactForm"><ContactForm/></div>
      <Footer />
    </div>
  );
}

export default App;
