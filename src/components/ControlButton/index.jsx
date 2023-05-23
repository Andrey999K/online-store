import React from "react";
import PropTypes from "prop-types";
import Icon from "../UI/Icon";
import { Link } from "react-router-dom";

const ControlButton = ({ icon, text, url }) => {
  return (
    <Link
      to={url}
      className="flex flex-col justify-center items-center text-gray-400 hover:text-sky-500 text-sm"
    >
      {icon && (
        <Icon name={icon} className="w-[24px] h-[24px]" />
      )}
      <span>{text}</span>
    </Link>
  );
};

ControlButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  url: PropTypes.string
};

ControlButton.defaultProps = {
  url: `${process.env.PUBLIC_URL}`
};

export default ControlButton;
