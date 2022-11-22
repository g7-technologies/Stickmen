import styled from "styled-components";

const Wrapper = styled.div`
  h3 {
    font-size: 50px;
    font-weight: 500px;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 50px;
    @media (max-width: 575px) {
      font-size: 30px;
    }
  }
  > div {
    .stickmenSliderContainer {
      max-width: 400px;
      width: 100%;
      overflow: hidden;
      padding: 10px;
      .swiper {
        width: 100%;
        .swiper-wrapper {
          width: 100%;
          .swiper-slide {
            min-height: 300px;
            padding: 15px;
            @media (max-width: 350) {
              padding: 5px;
            }
            .card {
              width: 100%;
              height: 100%;
              text-align: center;
              font-family: "Jost", sans-serif;
              img {
                width: 164px;
                height: 164px;
                border-radius: 50%;
              }
              .cardDots {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span {
                  display: inline-block;
                  border: 5px solid #ffffff;
                  border-radius: 50%;
                  margin: 5px 0;
                }
              }
              .card-body {
                padding: 12px 0;
                border: 4px solid #ffffff;
                border-radius: 4px;
                letter-spacing: 1px;
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
