import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <button className="ButtonWrapper" onClick={onClick}>
      Load more...
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
