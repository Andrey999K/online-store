import React from "react";

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) pages.push(i);
  // const showPageNumber = (pageNumber) => {
  //   if (pageNumber < 6 || pageNumber === pageCount) return <li key={"page_" + pageNumber} className="px-4 py-2 rounded-full hover:text-sky-500 hover:bg-sky-100" role="button">{pageNumber}</li>;
  //   if (pageNumber === 6 && pageNumber !== pageCount) return <li key={"page_" + pageNumber} className="px-4 py-2 rounded-full hover:text-sky-500 hover:bg-sky-100" role="button">...</li>;
  //   return false;
  // };
  return (
    <div className="text-sm">
      <ul className="flex">
        {pages.map(page => (
          <li
            key={"page_" + page}
            className={
              (page === currentPage ? "bg-gray-200 " : "") +
              "px-4 py-2 rounded-full hover:text-sky-500 hover:bg-sky-100"
            }
            role="button"
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};
