"use client";

type OverviewTablePaginationProps = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
};

export function getPaginationRange(
  currentPage: number,
  totalPages: number,
): Array<number | "ellipsis"> {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 2) {
    return [1, 2, 3, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 1) {
    return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages,
  ];
}

export function OverviewTablePagination({
  currentPage,
  totalPages,
  pageSize,
  totalCount,
  onPageChange,
}: OverviewTablePaginationProps) {
  const visibleCount =
    totalCount === 0
      ? 0
      : Math.min(pageSize, totalCount - (currentPage - 1) * pageSize);
  const pageItems = getPaginationRange(currentPage, totalPages);

  return (
    <footer className="overview-table__pagination">
      <p className="overview-table__pagination-summary">
        Showing {visibleCount} of {totalCount} results
      </p>

      <nav
        className="overview-table__pagination-nav"
        aria-label="Table pagination"
      >
        <button
          type="button"
          className="overview-table__pagination-control"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>

        <ol className="overview-table__pagination-pages">
          {pageItems.map((item, index) =>
            item === "ellipsis" ? (
              <li
                key={`ellipsis-${index}`}
                className="overview-table__pagination-ellipsis"
                aria-hidden
              >
                ...
              </li>
            ) : (
              <li key={item}>
                <button
                  type="button"
                  className={`overview-table__pagination-page${
                    item === currentPage
                      ? " overview-table__pagination-page--active"
                      : ""
                  }`}
                  aria-current={item === currentPage ? "page" : undefined}
                  onClick={() => onPageChange(item)}
                >
                  {item}
                </button>
              </li>
            ),
          )}
        </ol>

        <button
          type="button"
          className="overview-table__pagination-control"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </nav>
    </footer>
  );
}
