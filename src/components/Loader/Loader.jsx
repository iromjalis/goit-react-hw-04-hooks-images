import React, { useState } from "react";
// import PropTypes from 'prop-types';
import ThreeDots from "react-loader-spinner";

const Loader = () => {
  return (
    //   return <h1>Something went wrong.</h1>;
    <div className="LoaderWrapper">
      <ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

Loader.propTypes = {
  // bla: PropTypes.string,
};

Loader.defaultProps = {
  // bla: 'test',
};

export default Loader;
