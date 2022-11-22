import styled from "styled-components";

const Wrapper = styled.div`
  footer {
    padding: 30px 0 28px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #514f4f;
    .footerSocialIcons {
      a {
        text-decoration: none;
        color: #ffffff;
        font-size: 36px;
        :not(:first-child) {
          margin-left: 15px;
        }
      }
    }
  }
`;

export default Wrapper;
