import type { ReactNode } from "react";
import { getImagingTatTone } from "@/features/imaging/config/imaging-insights-data";

type ImagingTableColumn = {
  key: string;
  label: string;
  align?: "left" | "center";
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
  variant,
  columns,
  rows,
  ariaLabel,
}: ImagingDataTableProps) {
  return (
    <div
      className={joinClasses("imaging-table", `imaging-table--${variant}`)}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="imaging-table__header" role="row">
        {columns.map((column) => (
          <span
            key={column.key}
            className={joinClasses(
              "imaging-table__cell",
              column.align === "left" && "imaging-table__cell--name",
              column.key === "tat" && "imaging-table__cell--tat",
            )}
          >
            {column.label}
          </span>
        ))}
      </div>

      <ul className="imaging-table__body">
        {rows.map((row) => (
          <li key={String(row.id)} className="imaging-table__row" role="row">
            {columns.map((column) => {
              const value = row[column.key];

              if (column.key === "tat" && typeof value === "number") {
                const tone = getImagingTatTone(value);

                return (
                  <span
                    key={column.key}
                    className="imaging-table__cell imaging-table__cell--tat"
                  >
                    <span
                      className={`imaging-table__tat imaging-table__tat--${tone}`}
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
                    "imaging-table__cell",
                    column.align === "left" && "imaging-table__cell--name",
                    column.key === "active" && "imaging-table__cell--active",
                    column.key === "done" && "imaging-table__cell--done",
                    column.key === "pending" && "imaging-table__cell--pending",
                    column.key === "performed" &&
                      "imaging-table__cell--performed",
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
