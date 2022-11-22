import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  h3 {
    font-size: 50px;
    font-weight: 500px;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 3px;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .roadmapContainer {
    width: 100%;
    margin: auto;
    padding-right: 90px;
    padding-left: 70px;
    position: relative;
    font-family: "Karla", sans-serif;
    @media (max-width: 500px) {
      padding-left: 15px;
      padding-right: 30px;
    }
    .roadmapLine {
      position: absolute;
      left: 50%;
      top: 100px;
      bottom: 100px;
      max-width: 300px;
      width: 100%;
      transform: translateX(-50%);
      img {
        width: 100%;
        height: 100%;
      }
      @media (max-width: 1100px) {
        max-width: 250px;
      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
    .roadmap {
      max-width: 400px;
      min-height: 220px;
      width: 100%;
      display: flex;
      position: relative;
      @media (max-width: 1300px) {
        max-width: 300px;
        min-height: 150px;
      }
      @media (max-width: 1100px) {
        max-width: 280px;
        min-height: 150px;
      }
      @media (max-width: 1024px) {
        max-width: 400px;
        min-height: 220px;
      }
      @media (max-width: 992px) {
        margin: auto;
        margin-top: 150px;
      }

      :nth-child(odd) {
        margin-left: auto;
        @media (max-width: 992px) {
          margin-left: 0;
        }
      }
      :nth-child(2) {
        @media (max-width: 1100px) {
          transform: translateY(51px);
        }
        @media (max-width: 992px) {
          transform: translateY(0px);
          margin-top: 0px;
        }
      }
      :nth-child(3) {
        transform: translateY(-40px);
        @media (max-width: 1100px) {
          transform: translateY(-21px);
        }
        @media (max-width: 992px) {
          margin: auto;
          margin-top: 100px;
        }
        @media (max-width: 450px) {
          margin: auto;
          margin-top: 98px;
        }
      }
      :nth-child(4) {
        transform: translateY(-20px);
        @media (max-width: 1100px) {
          transform: translateY(-19px);
        }
        @media (max-width: 992px) {
          transform: translateY(0px);
          margin-top: 60px;
        }
        @media (max-width: 450px) {
          margin: auto;
          margin-top: 60px;
        }
      }
      :nth-child(5) {
        transform: translateY(-20px);
        @media (max-width: 1100px) {
          transform: translateY(-64px);
        }
        @media (max-width: 992px) {
          margin: auto;
          margin-top: 150px;
        }
        @media (max-width: 450px) {
          margin: auto;
          margin-top: 140px;
        }
      }

      .readMoreText {
        position: absolute;
        left: 0;
        top: 0;
        min-height: 200px;
        width: 100%;
        background: #5b316f;
        border: 2px solid #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        z-index: 2;
        transform: translate(50px, 50px);
        padding: 15px;
        line-height: 1.3;
        @media (max-width: 500px) {
          width: 95%;
          margin-left: 15px;
        }
        ul {
          font-size: 14px;
          list-style: none;
          @media (max-width: 450px) {
            font-size: 13px;
          }
          > li {
            text-decoration: none;
            font-size: 14px;
            display: block;
            padding-left: 20px;
            color: #3bd6f1;
            @media (max-width: 450px) {
              font-size: 13px;
            }
            > :last-child {
              margin-left: auto;
            }
            a {
              color: #fff;
            }
            button {
              border: none;
              color: #0f85dd;
              font-size: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: "Karla", sans-serif;
              background: transparent;
              margin-left: auto;
              cursor: pointer;
              @media (max-width: 450px) {
                font-size: 13px;
              }
              span {
                margin-left: 7px;
                margin-top: 7px;
              }
            }
          }
          ul {
            padding-left: 15px;
            list-style: disc;
            > li {
              text-decoration: none;
              font-size: 14px;
              display: block;
              padding-left: 20px;
              color: #3bd6f1;
            }
          }
        }
      }
      .roadmap-front {
        width: 100%;
        height: 220px;
        background: #5b316f;
        border: 2px solid #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        padding: 30px;
        text-align: center;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 1300px) {
          max-width: 300px;
          min-height: 150px;
        }
        @media (max-width: 1100px) {
          max-width: 280px;
          min-height: 150px;
        }
        @media (max-width: 1024px) {
          max-width: 400px;
          min-height: 220px;
        }
        .title {
          font-size: 30px;
          font-weight: 500;
        }
        .subtitle {
          font-size: 22px;
          font-weight: 500;
        }
        button {
          border: none;
          color: #0f85dd;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          font-family: "Karla", sans-serif;
          background: transparent;
          cursor: pointer;
          span {
            margin-left: 7px;
            margin-top: 7px;
          }
        }
      }
      .background {
        position: absolute;
        right: -20px;
        bottom: -20px;
        width: 100%;
        height: 100%;
        background: #5b316f;
        border: 2px solid #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
      }
    }
  }
`;
export default Wrapper;
