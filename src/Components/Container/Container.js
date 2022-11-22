import React from "react";
import Wrapper from "./Container.styled";
import PropTypes from "prop-types";

function Container({ children, dflex, center, between, around }) {
  return (
    <Wrapper dflex={dflex} center={center} between={between} around={around}>
      {children}
    </Wrapper>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
