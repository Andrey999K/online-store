import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ items }) => {
  return (
    <nav>
      {items && (
        <ul className="inline-flex flex-col lg:flex-row lg:gap-3 lg:text-sm text-gray-400">
          {items.map(item => (
            <li
              key={item.id}
              className="hover:text-sky-500 py-3 lg:py-3 border-b-solid border-b-[1px] border-gray-100 lg:p-2"
            >
              <a href="/">{item.text}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  items: PropTypes.array
};

Navigation.defaultProps = {};

export default Navigation;
