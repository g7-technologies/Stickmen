import React, { useState, useEffect } from "react";
import Wrapper from "./Banner.styled";
import Container from "../Container/Container";
import { NavHashLink } from "react-router-hash-link";
// import icons
import { Icon } from "@iconify/react";
function Banner() {
  const [mobileMenu, setMobileMenu] = useState(false);
  // mobile menu function
  useEffect(() => {
    const x = document.querySelector(".buttonGroups");
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        x.style.width = "auto";
      } else {
        x.style.width = 0 + "%";
      }
    });

    if (window.innerWidth < 575) {
      if (mobileMenu) {
        x.style.width = 75 + "%";
      } else {
        x.style.width = 0 + "%";
      }
    } else if (window.innerWidth < 768) {
      if (mobileMenu) {
        x.style.width = 50 + "%";
      } else {
        x.style.width = 0 + "%";
      }
    }
  }, [mobileMenu]);

  return (
    <Wrapper>
      <Container dflex between>
        <button
          className="mobileMenu"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          <Icon icon="codicon:menu" />
        </button>
        <div className="buttonGroups">
          <button
            className="closeMobileMenu"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <Icon icon="akar-icons:cross" />
          </button>
          <NavHashLink
            smooth
            to="/"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            Join Discord
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#team"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            Meet The Team
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#roadmap"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            Roadmap
          </NavHashLink>
        </div>
        <div className="socialIcons">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Icon icon="akar-icons:discord-fill" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Icon icon="ant-design:twitter-circle-filled" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Icon icon="entypo-social:instagram-with-circle" />
          </a>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Banner;
