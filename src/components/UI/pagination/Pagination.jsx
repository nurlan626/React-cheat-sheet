import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, setPage, page }) => {
  let pageArray = getPagesArray(totalPages);

  return (
    <div>
      {pageArray.map((number) => (
        <button
          onClick={() => setPage(number)}
          key={number}
          className={page === number ? "page currentPage  " : "page"}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
