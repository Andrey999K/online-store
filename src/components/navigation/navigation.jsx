import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ items }) => {
  return (
    <nav>
      {items && (
        <ul className="flex gap-3 text-sm">
          {items.map(item =>
            <li key={item.id} className="hover:text-sky-500">
              <a href="#">{item.text}</a>
            </li>
          )}
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
