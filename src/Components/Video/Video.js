import React, { useRef, useState } from "react";
import Wrapper from "./Video.styled";
import { Icon } from "@iconify/react";

// import video
import Videofile from "../../images/FullStickmanFinal.mp4";

function Video() {
  const [buttonDisplay, setButtonDisplay] = useState(false);

  const Videoref = useRef(null);
  function playVideo() {
    if (Videoref.current.paused) {
      Videoref.current.play();
    } else {
      Videoref.current.pause();
    }
  }

  return (
    <Wrapper>
      <div className="videoContainer">
        <video
          loop
          muted
          autoPlay
          onPlay={() => {
            setButtonDisplay(true);
          }}
          onPause={() => {
            setButtonDisplay(false);
          }}
          ref={Videoref}
        >
          <source src={Videofile} type="video/mp4" />
        </video>
      </div>
      {!buttonDisplay && (
        <div className="overlay">
          <button onClick={playVideo}>
            <Icon icon="charm:media-play" />
          </button>
        </div>
      )}
    </Wrapper>
  );
}

export default Video;
