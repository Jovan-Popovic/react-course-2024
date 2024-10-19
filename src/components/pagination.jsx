import { useCallback, useMemo } from "react";

export const Pagination = ({
  page,
  pageCount,
  setPage,
  setLoading,
  disabled,
}) => {
  const shouldDisablePreviousPageButton = useMemo(() => {
    return page === 1 || disabled;
  }, [disabled, page]);

  const shouldDisableNextPageButton = useMemo(() => {
    return pageCount === page || disabled;
  }, [disabled, page, pageCount]);

  const handlePreviousButtonClick = useCallback(() => {
    setLoading(true);
    setPage(page - 1);
  }, [page, setLoading, setPage]);

  const handleNextButtonClick = useCallback(() => {
    setLoading(true);
    setPage(page + 1);
  }, [page, setLoading, setPage]);

  const handlePageButtonClick = useCallback(
    pageIndex => {
      setLoading(true);
      setPage(pageIndex + 1);
    },
    [setLoading, setPage]
  );

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handlePreviousButtonClick}
        disabled={shouldDisablePreviousPageButton}
      >
        Previous
      </button>
      {Array.from({ length: pageCount }).map((_, pageIndex) => (
        <button
          key={pageIndex}
          className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={() => handlePageButtonClick(pageIndex)}
          disabled={disabled || page === pageIndex + 1}
        >
          {pageIndex + 1}
        </button>
      ))}
      <button
        className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handleNextButtonClick}
        disabled={shouldDisableNextPageButton}
      >
        Next
      </button>
    </div>
  );
};
