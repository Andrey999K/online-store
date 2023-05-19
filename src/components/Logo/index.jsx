import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ image }) => {
  return (
    <Link to={process.env.PUBLIC_URL}>
      {image
        ? <img src={require(`../../img/${image}`)} alt="Logo" />
        : <div className="text-5xl font-bold">
          <span>L</span>
          <span>o</span>
          <span className="text-sky-500">g</span>
          <span className="text-sky-500">o</span>
          </div>}
    </Link>
  );
};

Logo.propTypes = {
  image: PropTypes.string
};

export default Logo;
