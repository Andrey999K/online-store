import React from "react";
import PropTypes from "prop-types";

const Badge = ({ text, type, color }) => {
  return <div className={(color ? `bg-[${color}]` : (type === "super" ? "bg-green-500" : "bg-sky-500")) + " inline-block box-border text-white text-[12px] py-1 px-2 rounded"}>{text}</div>;
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string
};

Badge.defaultProps = {};

export default Badge;
