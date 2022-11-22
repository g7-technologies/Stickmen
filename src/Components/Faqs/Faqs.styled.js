import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 50px;

  @media (max-width: 700px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  h3 {
    font-size: 50px;
    font-weight: 500px;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 6px;
    text-align: center;
    margin-bottom: 50px;
  }
  /* .accordion {
    position: relative;
    .leftBorder {
      position: absolute;
      top: 30px;
      bottom: 30px;
      left: 0;
      width: 1px;
      background-color: #dcdcdc;
      @media (max-width: 640px) {
        display: none;
      }
    }
  } */
  .accordion-container {
    padding: 0 30px;
    font-family: "Karla", sans-serif;
    position: relative;
    border-left: 1px solid #dcdcdc;
    @media (max-width: 640px) {
      padding: 0;
      border: none;
    }
    ::after {
      content: "";
      width: 15px;
      height: 15px;
      position: absolute;
      right: 100%;
      top: 25px;
      transform: translateX(50%);
      background-color: #ffffff;
      border-radius: 50%;
      @media (max-width: 640px) {
        display: none;
      }
    }
    :first-child {
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-50%);
        width: 2px;
        height: 30px;
        background: #da217d;
        @media (max-width: 640px) {
          display: none;
        }
      }
    }
    :last-child {
      border: none;
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 30px;
        background: #dcdcdc;
        @media (max-width: 640px) {
          display: none;
        }
      }
    }
    .accordion-item {
      background-color: transparent;
      color: #fff;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 25px;
      font-weight: 400;
      transition: 0.4s;
      position: relative;
      @media (max-width: 640px) {
        font-size: 18px;
        padding-left: 0;
      }
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/plus.svg?color=white") no-repeat center center / contain;
      }
    }
    .active {
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/arrow-up.svg?color=white") no-repeat center center /
          contain;
      }
    }
    .panel {
      padding: 0 30px;
      background-color: transparent;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      p {
        padding: 30px 0;
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
`;

export default Wrapper;
