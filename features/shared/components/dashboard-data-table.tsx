import type { ReactNode } from "react";

export type DashboardTableColumn = {
  key: string;
  label: string;
  className?: string;
  cellVariant?: "emphasis";
  cellType?: "tat" | "pending";
};

export type DashboardDataTableRow = {
  id: string;
  [key: string]: ReactNode;
};

type DashboardDataTableProps = {
  columns: DashboardTableColumn[];
  rows: DashboardDataTableRow[];
  ariaLabel: string;
  columnCount?: 5 | 6;
  bodyClassName?: string;
};

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getHeaderCellClass(column: DashboardTableColumn) {
  return joinClasses(
    "overview-table__cell",
    column.className,
    column.cellType === "tat" && "overview-table__cell--tat",
  );
}

function getBodyCellClass(column: DashboardTableColumn, columnIndex: number) {
  return joinClasses(
    "overview-table__cell",
    column.className,
    columnIndex === 0 && "overview-table__cell--name",
    columnIndex > 0 &&
      column.cellVariant === "emphasis" &&
      "overview-table__cell--emphasis",
    column.cellType === "tat" && "overview-table__cell--tat",
    column.cellType === "pending" && "overview-table__cell--pending",
  );
}

export function DashboardDataTable({
  columns,
  rows,
  ariaLabel,
  columnCount = 5,
  bodyClassName,
}: DashboardDataTableProps) {
  return (
    <div
      className={joinClasses(
        "overview-table",
        columnCount === 6 && "overview-table--cols-6",
      )}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="overview-table__header" role="row">
        {columns.map((column, columnIndex) => (
          <span
            key={column.key}
            className={getHeaderCellClass(column)}
          >
            {column.label}
          </span>
        ))}
      </div>

      <ul className={joinClasses("overview-table__body", bodyClassName)}>
        {rows.map((row) => (
          <li key={row.id} className="overview-table__row" role="row">
            {columns.map((column, columnIndex) => (
              <span
                key={column.key}
                className={getBodyCellClass(column, columnIndex)}
              >
                {row[column.key]}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
