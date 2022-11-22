import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  .videoContainer {
    max-width: 100vw;
    width: 100%;
    height: 80vh;
    @media (max-width: 650px) {
      height: 60vh;
    }
    @media (max-width: 500px) {
      height: 50vh;
    }
    @media (max-width: 425px) {
      height: 40vh;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: fill;
      /* @media (min-width: 960px) {
        object-fit: cover;
      } */
    }
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 700;
    color: #e90168;
    background: #bbbbbb4d;
    button {
      width: 80px;
      height: 80px;
      color: #e90168;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 5px solid #e90168;
      border-radius: 50%;
      font-size: 50px;
      :hover {
        cursor: pointer;
      }
      svg {
        margin-left: 12px;
      }
    }
  }
`;

export default Wrapper;
