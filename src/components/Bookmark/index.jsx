import React from "react";
import PropTypes from "prop-types";
import Icon from "../UI/Icon";

const Bookmark = ({ status, onClick }) => {
  return (
    <button>
      <Icon name={status ? "bookmark-fill" : "bookmark"} className={(status ? "text-sky-500 " : "") + "w-[22px] h-[22px]"} />
    </button>
  );
};

Bookmark.propTypes = {
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

Bookmark.defaultProps = {};

export default Bookmark;
