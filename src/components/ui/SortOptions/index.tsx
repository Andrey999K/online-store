import React from "react";
import { Icon } from "@/components/common/Icon";
import { SetState, SortOption } from "@/types";

interface SortOptionsProps {
  items: Array<{
    field: string;
    text: string;
  }>;
  onSort: SetState<SortOption>;
  selectedSort: {
    iter: string;
    order: string;
  };
}

const InnerSortOptions: React.FC<SortOptionsProps> = ({
  items,
  onSort,
  selectedSort
}) => {
  const handleSort = (field: string) => {
    if (selectedSort.iter === field)
      onSort(prevState => ({
        ...prevState,
        order: prevState.order === "asc" ? "desc" : "asc"
      }));
    else onSort({ iter: field, order: "asc" });
  };
  const showSort = (item: { field: string; text: string }) => {
    if (item.field === selectedSort.iter) {
      return (
        <>
          <b>{item.text}</b>
          <Icon
            name={`arrow-${selectedSort.order}-sort`}
            className="w-[18px] h-[18px]"
          />
        </>
      );
    }
    return item.text;
  };
  return (
    <div className="flex items-center">
      <ul className="flex text-base gap-3">
        {items.map(item => (
          <li
            key={item.field}
            onClick={() => handleSort(item.field)}
            role="button"
            className="flex items-end gap-1"
          >
            {showSort(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SortOptions = React.memo(InnerSortOptions);
