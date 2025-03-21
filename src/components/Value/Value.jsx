import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Value.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./living-room.png" alt="value" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">The values we give</span>
          <span className="secondaryText">
            We always ready to give the best service <br />
            We believe a hygiene place to live make the life better
            perspiciatis!
          </span>

          {/* Accordion section */}
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[2]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={"accordion-item"}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                        <AccordionItemButton className="flexCenter accordion-button">
                            <div className="flexCenter icon">{item.icon}</div>
                            <span className="primaryText">{item.heading}</span>
                            <div className="flexCenter icon">
                                <MdOutlineArrowDropDown size={20} />
                            </div>
                        </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
