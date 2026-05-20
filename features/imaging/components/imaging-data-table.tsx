import type { ReactNode } from "react";
import { getImagingTatTone } from "@/features/imaging/config/imaging-insights-data";

type ImagingTableColumn = {
  key: string;
  label: string;
};

type ImagingDataTableProps = {
  variant: "modality" | "reporting";
  columns: ImagingTableColumn[];
  rows: Array<Record<string, ReactNode | string | number>>;
  ariaLabel: string;
};

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ImagingDataTable({
  columns,
  rows,
  ariaLabel,
}: ImagingDataTableProps) {
  return (
    <div className="overview-table" role="region" aria-label={ariaLabel}>
      <div className="overview-table__header" role="row">
        {columns.map((column) => (
          <span
            key={column.key}
            className={joinClasses(
              "overview-table__cell",
              column.key === "tat" && "overview-table__cell--tat",
            )}
          >
            {column.label}
          </span>
        ))}
      </div>

      <ul className="overview-table__body">
        {rows.map((row) => (
          <li key={String(row.id)} className="overview-table__row" role="row">
            {columns.map((column, columnIndex) => {
              const value = row[column.key];

              if (column.key === "tat" && typeof value === "number") {
                const tone = getImagingTatTone(value);

                return (
                  <span
                    key={column.key}
                    className="overview-table__cell overview-table__cell--tat"
                  >
                    <span
                      className={`overview-table__tat overview-table__tat--${tone}`}
                    >
                      {value}%
                    </span>
                  </span>
                );
              }

              return (
                <span
                  key={column.key}
                  className={joinClasses(
                    "overview-table__cell",
                    columnIndex === 0 && "overview-table__cell--name",
                    column.key === "active" && "overview-table__cell--active",
                    column.key === "done" && "overview-table__cell--done",
                    column.key === "pending" && "overview-table__cell--pending",
                    column.key === "performed" &&
                      "overview-table__cell--performed",
                  )}
                >
                  {value}
                </span>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}
