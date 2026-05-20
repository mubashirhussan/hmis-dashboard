"use client";

import { useMemo, useState } from "react";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import { PanelViewAllButton } from "@/features/shared/components/panel-view-all-button";
import { OverviewTablePagination } from "@/features/overview/components/overview-table-pagination";
import {
  getTatBadgeTone,
  type OverviewTableRow,
} from "@/features/overview/config/overview-tables-data";
import CollectionFillIcon from "@iconify-react/bi/collection-fill";

type OverviewDataTableCardProps = {
  title: string;
  nameColumnLabel: string;
  rows: OverviewTableRow[];
  pagination?: boolean;
  pageSize?: number;
  totalCount?: number;
};

export function OverviewDataTableCard({
  title,
  nameColumnLabel,
  rows,
  pagination = false,
  pageSize = 6,
  totalCount,
}: OverviewDataTableCardProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const resolvedTotalCount = totalCount ?? rows.length;
  const totalPages = Math.max(1, Math.ceil(resolvedTotalCount / pageSize));

  const safePage = Math.min(currentPage, totalPages);

  const visibleRows = useMemo(() => {
    if (!pagination) {
      return rows;
    }

    const start = (safePage - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }, [pagination, pageSize, rows, safePage]);

  return (
    <DashboardPanel
      className="overview-table-panel"
      title={title}
      icon={<CollectionFillIcon height="39" color="white" />}
      action={<PanelViewAllButton />}
    >
      <div className="overview-table" role="region" aria-label={title}>
        <div className="overview-table__header" role="row">
          <span className="overview-table__cell">{nameColumnLabel}</span>
          <span className="overview-table__cell">Samples</span>
          <span className="overview-table__cell overview-table__cell--tat">
            TAT
          </span>
          <span className="overview-table__cell">Done</span>
          <span className="overview-table__cell">Pending</span>
        </div>

        <ul
          className={`overview-table__body${
            pagination ? " overview-table__body--paginated" : ""
          }`}
        >
          {visibleRows.map((row) => {
            const tone = getTatBadgeTone(row.tat);

            return (
              <li key={row.id} className="overview-table__row" role="row">
                <span className="overview-table__cell overview-table__cell--name">
                  {row.name}
                </span>
                <span className="overview-table__cell">{row.samples}</span>
                <span className="overview-table__cell overview-table__cell--tat">
                  <span
                    className={`overview-table__tat overview-table__tat--${tone}`}
                  >
                    {row.tat}%
                  </span>
                </span>
                <span className="overview-table__cell">{row.done}</span>
                <span className="overview-table__cell">{row.pending}</span>
              </li>
            );
          })}
        </ul>

        {pagination ? (
          <OverviewTablePagination
            currentPage={safePage}
            totalPages={totalPages}
            pageSize={pageSize}
            totalCount={resolvedTotalCount}
            onPageChange={setCurrentPage}
          />
        ) : null}
      </div>
    </DashboardPanel>
  );
}
