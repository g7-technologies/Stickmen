import React, { useState } from "react";
import Wrapper from "./Roadmap.styled";
import { motion } from "framer-motion";

// import icons
import { Icon } from "@iconify/react";
import RoadmapBorder from "../../images/roadmapborder.svg";

function Roadmap() {
  const [firstTable, setFirstTable] = useState(false);
  const [secondTable, setSecondTable] = useState(false);
  const [thirdTable, setThirdTable] = useState(false);
  const [fourthTable, setFourthTable] = useState(false);

  // framer motion animation values
  // show text table
  const FirstPlace = {
    scale: 1.1,
    x: 0,
  };
  // Hide back table
  const HideBackground = {
    scale: 0,
    x: 0,
  };

  return (
    <Wrapper>
      <h3 id="roadmap">ROAD MAP</h3>
      <div className="roadmapContainer">
        <div className="roadmapLine">
          <img src={RoadmapBorder} alt="line" />
        </div>
        <div className="roadmap">
          <motion.div className="roadmap-front">
            <p className="title">PHASE ONE</p>
            <p className="subtitle">Q1 2022 </p>
            <button
              onClick={() => {
                setFirstTable(!firstTable);
              }}
            >
              Read More
              <span>
                <Icon icon="bxs:down-arrow" />
              </span>
            </button>
          </motion.div>
          <motion.div
            className="background"
            animate={firstTable ? HideBackground : ""}
            initial={{ scale: 1 }}
          ></motion.div>
          <motion.div className="readMoreText" animate={firstTable ? FirstPlace : ""} initial={{ scale: 0 }}>
            <ul>
              <li>- Creation of the Stickman Discord/Socials</li>
              <li>- Stickman Merch Giveaways </li>
              <li>
                - Official Launch of <a href="https://stickmansaga.com">stickmansaga.com</a>
              </li>
              <ul>
                <li>Community Events</li>
                <li>Stickman Saga Teaser Video</li>
              </ul>
              <li>- Stickman Saga x 135 Giveaway</li>
              <li>- Release of the Stickman Merch Market</li>
              <li>
                <button
                  onClick={() => {
                    setFirstTable(!firstTable);
                  }}
                >
                  Read less
                  <span>
                    <Icon icon="bxs:down-arrow" />
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="roadmap">
          <div className="roadmap-front">
            <p className="title">PHASE TWO</p>
            <p className="subtitle">Q2 2022 </p>
            <button
              onClick={() => {
                setSecondTable(!secondTable);
              }}
            >
              Read More
              <span>
                <Icon icon="bxs:down-arrow" />
              </span>
            </button>
          </div>
          <motion.div
            className="background"
            animate={secondTable ? HideBackground : ""}
            initial={{ scale: 1 }}
          ></motion.div>
          <motion.div className="readMoreText" animate={secondTable ? FirstPlace : ""} initial={{ scale: 0 }}>
            <ul>
              <li>
                - Stickman Saga Presale (April 12th) <a href="https://www.stickmansaga.com">www.stickmansaga.com</a>
              </li>
              <li>
                - Stickman Saga Public Sale (April 13th) <a href="https://www.stickmansaga.com">www.stickmansaga.com</a>
              </li>
              <li>- Secondary Marketplace Listings</li>
              <li>- Stickman Saga Battle Arena Game Development </li>
              <li>- Official $GEN3 Token Airdrop </li>
              <li>- Release of the Stickman Saga Marketplace </li>
              <ul>
                <li>Beta Testing for the Stickman Saga Battle Arena</li>
              </ul>
              <li>
                <button
                  onClick={() => {
                    setSecondTable(!secondTable);
                  }}
                >
                  Read less
                  <span>
                    <Icon icon="bxs:down-arrow" />
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="roadmap">
          <div className="roadmap-front">
            <p className="title">PHASE THREE</p>
            <p className="subtitle">Q3 2022 </p>
            <button
              onClick={() => {
                setThirdTable(!thirdTable);
              }}
            >
              Read More
              <span>
                <Icon icon="bxs:down-arrow" />
              </span>
            </button>
          </div>
          <motion.div
            className="background"
            animate={thirdTable ? HideBackground : ""}
            initial={{ scale: 1 }}
          ></motion.div>
          <motion.div className="readMoreText" animate={thirdTable ? FirstPlace : ""} initial={{ scale: 0 }}>
            <ul>
              <li>- Official Release of the Stickman Saga Battle Arena</li>
              <li>- Fist Stickman Battle Arena Tournament</li>
              <li>- Release of Stickman Staking/Collateral in partnership with Pawnsy.io</li>
              <li>- Release of the Stickman Campaign Mode (Complete Quests to earn $GEN3)</li>
              <li>- HODL party in Miami Beach, FL at August 13th 2022</li>
              <li>
                <button
                  onClick={() => {
                    setThirdTable(!thirdTable);
                  }}
                >
                  Read less
                  <span>
                    <Icon icon="bxs:down-arrow" />
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="roadmap">
          <div className="roadmap-front">
            <p className="title">PHASE FOUR</p>
            <p className="subtitle">Q4 2022 </p>
            <button
              onClick={() => {
                setFourthTable(!fourthTable);
              }}
            >
              Read More
              <span>
                <Icon icon="bxs:down-arrow" />
              </span>
            </button>
          </div>
          <motion.div
            className="background"
            animate={fourthTable ? HideBackground : ""}
            initial={{ scale: 1 }}
          ></motion.div>
          <motion.div className="readMoreText" animate={fourthTable ? FirstPlace : ""} initial={{ scale: 0 }}>
            <ul>
              <li>- Release of the Stickman Saga Clubhouse </li>
              <li>- Beta Release of Generation3 Gaming Platform Gen3.Games</li>
              <li>- Second Stickman Arena Tournament (With Cash Prizes)</li>
              <li>- MORE UPDATES AND PLANS COMING SOON</li>
              <li>
                <button
                  onClick={() => {
                    setFourthTable(!fourthTable);
                  }}
                >
                  Read less
                  <span>
                    <Icon icon="bxs:down-arrow" />
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
