import React from "react";
import PropTypes from "prop-types";

const Filters = ({ onSort }) => {
  return (
    <div>
      <ul className="flex text-base gap-3">
        <li role="button">По рейтингу</li>
        <li role="button">По отзывам</li>
        <li onClick={() => onSort("price")} role="button">По цене</li>
        <li onClick={() => onSort("name")} role="button">По названию</li>
      </ul>
    </div>
  );
};

Filters.propTypes = {
  onSort: PropTypes.func.isRequired
};

Filters.defaultProps = {};

export default Filters;
