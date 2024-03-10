import React from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      <Icon name="star" className="text-sky-500 w-[16px] h-[16px]" />
      <span>{rating}</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Rating;
