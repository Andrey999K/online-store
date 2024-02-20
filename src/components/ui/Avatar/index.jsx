import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ src }) => {
  return (
    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden border-2 border-solid border-gray-300">
      <img
        src={src}
        alt="avatar"
      />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired
};

export default Avatar;
