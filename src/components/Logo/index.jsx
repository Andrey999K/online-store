import React from "react";
import PropTypes from "prop-types";

const Logo = ({ image }) => {
  return (
    <a href="#">
      {image
        ? <img src={require(`../../img/${image}`)} alt="Logo" />
        : <div className="text-5xl font-bold">
          <span>L</span>
          <span>o</span>
          <span className="text-sky-500">g</span>
          <span className="text-sky-500">o</span>
          </div>}
    </a>
  );
};

Logo.propTypes = {
  image: PropTypes.string
};

Logo.defaultProps = {};

export default Logo;
