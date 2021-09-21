import React, { useState } from "react";

const Button = ({ onClick }) => {
  return (
    <button className="ButtonWrapper" onClick={onClick}>
      Load more...
    </button>
  );
};

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
