import { css } from "styled-components";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #ffffff;
  ${(props) =>
    props.dflex &&
    css`
      display: flex;
      align-items: center;
    `}
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
${(props) =>
    props.between &&
    css`
      justify-content: space-between;
    `}
${(props) =>
    props.around &&
    css`
      justify-content: space-around;
    `}
`;

export default Wrapper;
