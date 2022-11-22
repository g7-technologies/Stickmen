import React from "react";
import Wrapper from "./Faqs.styled";

function Faqs() {
  // accordion open function
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <Wrapper>
      <h3>FAQS</h3>
      <div className="accordion">
        {/*<div className="leftBorder"></div> */}
        <div className="accordion-container">
          <button className="accordion-item" onClick={handleAccordion}>
            How many stickmen NFTs will be released?
          </button>
          <div className="panel">
            <p>The date is currently April 13th</p>
          </div>
        </div>
        <div className="accordion-container">
          <button className="accordion-item" onClick={handleAccordion}>
            How many stickmen can I mint?
          </button>
          <div className="panel">
            <p>The date is currently April 13th</p>
          </div>
        </div>
        <div className="accordion-container" onClick={handleAccordion}>
          <button className="accordion-item">How do I get whitelisted?</button>
          <div className="panel">
            <p>The date is currently April 13th</p>
          </div>
        </div>
        <div className="accordion-container" onClick={handleAccordion}>
          <button className="accordion-item">When do the Stickmen NFTs Release?</button>
          <div className="panel">
            <p>The date is currently April 13th</p>
          </div>
        </div>
        <div className="accordion-container" onClick={handleAccordion}>
          <button className="accordion-item">How much will it cost to mint?</button>
          <div className="panel">
            <p>The date is currently April 13th</p>
          </div>
        </div>
        <div className="accordion-container" onClick={handleAccordion}>
          <button className="accordion-item">When will the game be released?</button>
          <div className="panel">
            <p>The date is currently April 13th</p>
          </div>
        </div>
        <div className="accordion-container" onClick={handleAccordion}>
          <button className="accordion-item">How will we receive $STIX?</button>
          <div className="panel">
            <p>The date is currently April 13th</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Faqs;
