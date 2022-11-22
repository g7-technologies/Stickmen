import React from "react";
import Wrapper from "./Stickmen.styed";
import { StickmenData } from "./Stickmen.data";

function Stickmen() {
  return (
    <Wrapper>
      <h3 id="team">Meet the Stickmen</h3>
      <div className="card-container">
        {StickmenData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.pic} alt="item" />
            <div className="cardDots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="card-body" style={{ background: `${item.textBackground}` }}>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Stickmen;
