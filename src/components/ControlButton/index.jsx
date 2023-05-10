import React from "react";
import PropTypes from "prop-types";
import Icon from "../UI/Icon";

const ControlButton = ({ icon, text }) => {
  return (
    <button className="flex flex-col justify-center items-center text-gray-400 hover:text-sky-500 text-sm">
      {icon && (
        <Icon name={icon} className="w-[24px] h-[24px]" />
      )}
      <span>{text}</span>
    </button>
  );
};

ControlButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired
};

ControlButton.defaultProps = {};

export default ControlButton;
