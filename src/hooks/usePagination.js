import { useMemo } from "react";

export const usePagination = ({ totalCount, limit = 3 }) => {
  const range = (start, end) => {
    let length = end - start + 1;
    /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / limit);
    return range(1, totalPageCount);
  }, [totalCount, limit]);

  return paginationRange;
};
