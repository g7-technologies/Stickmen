import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0 50px;
  @media (max-width: 575px) {
    padding: 0 10px;
  }
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
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    .card {
      width: calc(100% / 5 - 40px);
      margin: 20px;
      text-align: center;
      @media (max-width: 1100px) {
        width: calc(100% / 4 - 40px);
      }
      @media (max-width: 992px) {
        width: calc(100% / 3 - 40px);
      }
      @media (max-width: 768px) {
        width: calc(100% / 2 - 40px);
      }
      @media (max-width: 430px) {
        width: calc(100% - 40px);
      }
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
`;

export default Wrapper;
