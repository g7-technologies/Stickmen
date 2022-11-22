import React from "react";
import Wrapper from "./Stickmenslider.styled";
import Container from "../Container/Container";
// slider data
import { StickmenData } from "../Stickmen/Stickmen.data";
// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";

function Stickmenslider() {
  return (
    <Wrapper>
      <h3 id="team">Meet the Stickmen</h3>

      <Container dflex center>
        <div className="stickmenSliderContainer">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
          >
            {StickmenData.map((item) => (
              <SwiperSlide key={item.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Stickmenslider;
