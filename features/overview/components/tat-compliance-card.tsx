"use client";

import HexagonOutlineIcon from "@iconify-react/mdi/hexagon-outline";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import { PanelViewAllButton } from "@/features/shared/components/panel-view-all-button";
import {
  getTatBarTone,
  tatComplianceRows,
} from "@/features/overview/config/overview-insights-data";

export function TatComplianceCard() {
  return (
    <DashboardPanel
      className="tat-compliance-panel"
      title="TAT Compliance"
      icon={
        <HexagonOutlineIcon
          height="24"
          style={{ color: "#ffffff" }}
          aria-hidden
        />
      }
      action={<PanelViewAllButton />}
    >
      <ul className="tat-compliance">
        {tatComplianceRows.map((row) => {
          const tone = getTatBarTone(row.value);

          return (
            <li key={row.id} className="tat-compliance__row">
              <span className="tat-compliance__label">{row.label}</span>

              <div className="tat-compliance__bar-wrap">
                <span
                  className="tat-compliance__value"
                  style={{ left: `${row.value}%` }}
                >
                  {row.value}
                </span>
                <div className="tat-compliance__track">
                  <div
                    className={`tat-compliance__fill tat-compliance__fill--${tone}`}
                    style={{ width: `${row.value}%` }}
                  />
                </div>
              </div>

              <span className="tat-compliance__target">{row.target}</span>
            </li>
          );
        })}
      </ul>
    </DashboardPanel>
  );
}
