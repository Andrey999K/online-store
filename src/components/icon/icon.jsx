import React from "react";
import PropTypes from "prop-types";
import sprite from "../../../img/sprite.svg";

const Icon = ({ name, className }) => (
  <svg className={`icon ${className}`}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

Icon.defaultProps = {};

export default Icon;
