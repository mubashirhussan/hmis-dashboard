"use client";

import FolderOutlineIcon from "@iconify-react/mdi/folder-outline";
import { DashboardPanel } from "@/features/overview/components/dashboard-panel";
import { PanelViewAllButton } from "@/features/overview/components/panel-view-all-button";
import {
  getTatBadgeTone,
  type OverviewTableRow,
} from "@/features/overview/config/overview-tables-data";

type OverviewDataTableCardProps = {
  title: string;
  nameColumnLabel: string;
  rows: OverviewTableRow[];
};

export function OverviewDataTableCard({
  title,
  nameColumnLabel,
  rows,
}: OverviewDataTableCardProps) {
  return (
    <DashboardPanel
      className="overview-table-panel"
      title={title}
      icon={
        <FolderOutlineIcon
          height="24"
          style={{ color: "#ffffff" }}
          aria-hidden
        />
      }
      action={<PanelViewAllButton />}
    >
      <div className="overview-table" role="region" aria-label={title}>
        <div className="overview-table__header" role="row">
          <span className="overview-table__cell overview-table__cell--name">
            {nameColumnLabel}
          </span>
          <span className="overview-table__cell">Samples</span>
          <span className="overview-table__cell overview-table__cell--tat">
            TAT
          </span>
          <span className="overview-table__cell">Done</span>
          <span className="overview-table__cell">Pending</span>
        </div>

        <ul className="overview-table__body">
          {rows.map((row) => {
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
      </div>
    </DashboardPanel>
  );
}
