import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon";

const InnerViewSwitch = ({ grid, onClick }) => {
  return (
    <div className="flex gap-5">
      <button
        onClick={() => onClick(grid)}
        className={
          (grid ? "text-black" : "text-gray-400") + " hover:text-sky-500"
        }
      >
        <Icon name="grid" className="w-[18px] h-[18px]" />
      </button>
      <button
        onClick={() => onClick(grid)}
        className={
          (grid ? "text-gray-400" : "text-black") + " hover:text-sky-500"
        }
      >
        <Icon name="list" className="w-[22px] h-[22px]" />
      </button>
    </div>
  );
};

InnerViewSwitch.propTypes = {
  grid: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export const ViewSwitch = React.memo(InnerViewSwitch);
