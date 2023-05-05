import React from "react";
import PropTypes from "prop-types";

const Badge = ({ text, type, color }) => {
  let colorBadge = color ? `bg-[${color}]` : "bg-sky-500";
  if (type === "super") colorBadge = "bg-green-500";
  return <div className={colorBadge + " inline-block box-border text-white text-[12px] py-1 px-2 rounded"}>{text}</div>;
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string
};

Badge.defaultProps = {};

export default Badge;
