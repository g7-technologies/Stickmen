import React from "react";
import Banner from "../Components/Banner/Banner";
import Faqs from "../Components/Faqs/Faqs";
import Overview from "../Components/Overview/Overview";
import Stickmen from "../Components/Stickmen/Stickmen";
import Video from "../Components/Video/Video";
import Roadmap from "../Components/Roadmap/Roadmap";

import Wrapper from "../Containers/Home.styled";
// import icons
import { Icon } from "@iconify/react";
import BoatIcon from "../images/boaticon.svg";
import Stickmenslider from "../Components/StickmenSlider/Stickmenslider";
// custom hook
import useWindowsize from "../Hooks/useWindowsize";

function Home() {
  const [screenWidth] = useWindowsize();
  return (
    <Wrapper>
      <header>
        <Banner />
      </header>
      <main>
        <Video />
        <Overview />
        {screenWidth < 501 ? <Stickmenslider /> : <Stickmen />}
        <Roadmap />
        <Faqs />
      </main>
      <footer>
        <div className="footerSocialIcons">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Icon icon="akar-icons:discord-fill" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Icon icon="ant-design:twitter-circle-filled" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Icon icon="entypo-social:instagram-with-circle" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src={BoatIcon} alt="icon" />
          </a>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Home;
