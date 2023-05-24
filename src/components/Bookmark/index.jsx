import React from "react";
import PropTypes from "prop-types";
import Icon from "../UI/Icon";
import { useDispatch } from "react-redux";

const Bookmark = ({ status, product }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    status
      ? dispatch({ type: "DELETE_FROM_FAVORITES", payload: product })
      : dispatch({ type: "ADD_IN_FAVORITES", payload: product });
  };
  return (
    <button
      className="cursor-pointer text-gray-400 hover:text-sky-500"
      onClick={handleClick}
    >
      <Icon name={status ? "bookmark-fill" : "bookmark"} className={(status ? "text-sky-500 " : "") + "w-[22px] h-[22px]"} />
    </button>
  );
};

Bookmark.propTypes = {
  status: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired
};

Bookmark.defaultProps = {};

export default Bookmark;
