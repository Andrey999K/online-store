import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full max-w-screen-2xl px-5 lg:px-8 mx-auto flex flex-col">{children}</div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Wrapper;
