import React from "react";
import PropTypes from "prop-types";
import Icon from "../UI/Icon";

const SortOptions = ({ items, onSort, selectedSort }) => {
  const handleSort = (field) => {
    if (selectedSort.iter === field) onSort(prevState => ({ ...prevState, order: prevState.order === "asc" ? "desc" : "asc" }));
    else onSort({ iter: field, order: "asc" });
  };
  const showSort = (item) => {
    if (item.field === selectedSort.iter) {
      return (
        <>
          <b>{item.text}</b>
          <Icon name={`arrow-${selectedSort.order}-sort`} className="w-[18px] h-[18px]" />
        </>
      );
    }
    return item.text;
  };
  return (
    <div className="flex items-center">
      <ul className="flex text-base gap-3">
        {items.map(item =>
          <li
            key={item.field}
            onClick={() => handleSort(item.field)}
            role="button"
            className="flex items-end gap-1"
          >
            {showSort(item)}
          </li>
        )}
      </ul>
    </div>
  );
};

SortOptions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.shape({
    iter: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired
  }).isRequired
};

SortOptions.defaultProps = {};

export default React.memo(SortOptions);
