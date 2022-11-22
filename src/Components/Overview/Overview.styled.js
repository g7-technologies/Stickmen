import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  margin-top: 70px;
  padding: 0 50px;
  padding-bottom: 100px;
  @media (max-width: 575px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  > div {
    margin-top: 100px;
    :first-child {
      @media (max-width: 992px) {
        flex-direction: column-reverse;
      }
    }
    :last-child {
      @media (max-width: 992px) {
        flex-direction: column-reverse;
      }
    }
    @media (max-width: 992px) {
      flex-direction: column;
      flex-wrap: wrap;
    }
    @media (max-width: 768px) {
      margin-top: 50px;
    }
    .overviewText {
      padding-right: 20px;
      @media (max-width: 992px) {
        padding-top: 20px;
      }
      h3 {
        font-size: 45px;
        font-weight: 500px;
        font-family: "Bebas Neue", cursive;
        letter-spacing: 3px;
        @media (max-width: 575px) {
          font-size: 35px;
        }
      }
      p {
        max-width: 585px;
        width: 100%;
        font-size: 22px;
        font-weight: 400;
        line-height: 1.2;
        font-family: "Karla", sans-serif;
        a {
          text-decoration: none;
          color: lightblue;
          :hover {
            text-decoration: underline;
          }
        }
        @media (max-width: 575px) {
          font-size: 16px;
        }
      }
    }
    .overviewImg {
      min-width: 500px;
      @media (max-width: 575px) {
        min-width: 300px;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Wrapper;
