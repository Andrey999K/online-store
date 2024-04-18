import React from "react";
import { Icon } from "../Icon";

interface ViewSwitchProps {
  grid: boolean;
  onClick: (grid: boolean) => void;
}

const InnerViewSwitch: React.FC<ViewSwitchProps> = ({ grid, onClick }) => {
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

export const ViewSwitch = React.memo(InnerViewSwitch);
