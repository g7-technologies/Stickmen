import styled from "styled-components";
import Backgroundimg from "../../images/bannerbackground.png";

const Wrapper = styled.div`
  color: #000000;
  background: url(${Backgroundimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  > div {
    max-width: 1440px;
    margin: auto;
    padding: 0 50px;
    padding-top: 30px;
    position: relative;
    @media (max-width: 575px) {
      padding: 0 20px;
      padding-top: 30px;
    }
    .buttonGroups {
      width: auto;
      @media (max-width: 767px) {
        position: fixed;
        left: 0;
        top: 0;
        min-height: 100%;
        display: flex;
        width: 0%;
        flex-direction: column;
        align-items: center;
        background: #ffffff;
        border-radius: 0 5px 5px 0;
        overflow: hidden;
        transition: 0.3s ease;
        z-index: 9999;
      }
      a {
        text-decoration: none;
        color: #047cc9;
        background: #ffffff;
        border-radius: 50px;
        padding: 10px 30px;
        font-size: 18px;
        font-family: "Jua", sans-serif;
        :not(:first-child) {
          margin-left: 20px;
          @media (max-width: 767px) {
            margin-left: 0;
          }
        }
        @media (max-width: 1024px) {
          font-size: 16px;
          padding: 10px 25px;
        }
        @media (max-width: 768px) {
          padding: 10px 15px;
        }
        @media (max-width: 767px) {
          padding: 10px 20px;
          width: 100%;
          border-bottom: 1px solid #bbbbbb;
          border-radius: 0;
        }
      }
      .closeMobileMenu {
        display: none;
        font-size: 24px;
        border: none;
        background-color: transparent;
        margin-left: auto;
        padding: 15px;
        @media (max-width: 767px) {
          display: block;
        }
      }
    }
    .mobileMenu {
      display: none;
      border: none;
      font-size: 26px;
      color: #ffffff;
      background-color: transparent;
      @media (max-width: 767px) {
        display: block;
      }
    }
    .socialIcons {
      padding-top: 10px;
      a {
        text-decoration: none;
        color: #ffffff;
        font-size: 40px;
        :not(:first-child) {
          margin-left: 15px;
        }
        @media (max-width: 1024px) {
          font-size: 36px;
        }
        @media (max-width: 768px) {
          font-size: 35px;
        }
      }
    }
  }
`;

export default Wrapper;
