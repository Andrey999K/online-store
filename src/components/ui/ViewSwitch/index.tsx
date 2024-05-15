import React from "react";
import { Icon } from "@/components/common/Icon";
import { useGrid } from "@/hooks/useGrid.ts";

interface ViewSwitchProps {
  onClick: () => void;
}

const InnerViewSwitch: React.FC<ViewSwitchProps> = ({ onClick }) => {
  const grid = useGrid();
  return (
    <div className="flex gap-5">
      <button
        onClick={onClick}
        className={
          (grid ? "text-black" : "text-gray-400") + " hover:text-sky-500"
        }
      >
        <Icon name="grid" className="w-[18px] h-[18px]" />
      </button>
      <button
        onClick={onClick}
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
