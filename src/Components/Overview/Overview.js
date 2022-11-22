import React from "react";
import Wrapper from "./Overview.styled";
import Container from "../Container/Container";

// import images and icons
import Overviewimg1 from "../../images/overviewimg.png";
import Overviewimg2 from "../../images/overviewimg2.png";
import Overviewimg3 from "../../images/overviewimg3.png";

function Overview() {
  return (
    <Wrapper>
      <Container dflex between>
        <div className="overviewText">
          <h3>ABOUT US:</h3>
          <p>
            Stickman Saga is an exciting Metaverse gaming project introducing a new style of blockchain powered gaming.
            With our partners, Stickman Saga will soon launch a PvP, play-to-earn, decentralized battle arena where NFT
            holders can battle and rank up to earn rewards in the Stickman Ecosystem. The Stickman Saga team will change
            the NFT narrative by developing a long term community and ecosystem. Stickman Saga Battle Arena is the first
            of many games set to release on our future gaming platform. Original Stickman will play a vital role in the
            development and growth of our future gaming projects.
            <br />
            Welcome to the future of NFTs
          </p>
        </div>
        <div className="overviewImg">
          <img src={Overviewimg1} alt="overview" />
        </div>
      </Container>
      <Container dflex between>
        <div className="overviewImg">
          <img src={Overviewimg2} alt="overview" />
        </div>
        <div className="overviewText">
          <h3>GAMEPLAY:</h3>
          <p>
            Stickman battle arena will be a multi-level 2-D platform with 2.5-D Stickman characters. Options include
            1v1, 2v2, 3v3, or 4v4 with other Stickman Saga holders. A variety of maps with different layouts will auto
            generate for each battle. The changes between the maps will be cosmetic in nature, with slight differences
            in placement of landings to add a unique playing style on each. Stickmen will need to wager $GEN3 tokens to
            enter the battle arena, the winning team will earn the $GEN3 that was wagered. This is the first gaming
            style that Stickmen will be able to play. Once Stickman Battle Arena is live, there will be a beta testing
            campaign, and clubhouse modes.
          </p>
        </div>
      </Container>
      <Container dflex between>
        <div className="overviewText">
          <h3>$GEN3/MARKETPLACE:</h3>
          <p>
            Before the game is launched, all NFT holders will be airdropped $GEN3 token (the native token that powers
            the Generation3 Gaming Platform) to be used in the in-game marketplace. In the marketplace, Stickman holders
            will be able to buy upgrades (weapons, attributes, skins, etc.) for their character, as well as buy/sell all
            Stickman Saga NFTs. Every Stickman NFT Holder will have the opportunity to earn $GEN3 token by competing and
            battling within the Ecosystem. Stickman Saga will initially release on{" "}
            <a href="https://stickmansaga.com">stickmansaga.com</a> and migrate later to the GEN3 Gaming Platform
            Gen3.Games
          </p>
        </div>
        <div className="overviewImg">
          <img src={Overviewimg3} alt="overview" />
        </div>
      </Container>
    </Wrapper>
  );
}

export default Overview;
