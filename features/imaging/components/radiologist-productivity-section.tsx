import HexagonOutlineIcon from "@iconify-react/mdi/hexagon-outline";
import {
  getProductivityBarTone,
  radiologistProductivityRows,
} from "@/features/imaging/config/imaging-insights-data";
import { DashboardPanel } from "@/features/shared/components/dashboard-panel";
import { PanelViewAllButton } from "@/features/shared/components/panel-view-all-button";

export function RadiologistProductivitySection() {
  return (
    <DashboardPanel
      className="imaging-panel imaging-productivity-panel"
      title="Radiologist Productivity"
      icon={
        <HexagonOutlineIcon
          height="24"
          width="24"
          style={{ color: "#ffffff" }}
          aria-hidden
        />
      }
      action={<PanelViewAllButton />}
    >
      <ul className="imaging-productivity">
        {radiologistProductivityRows.map((row) => {
          const tone = getProductivityBarTone(row.avgMinutes);

          return (
            <li key={row.id} className="imaging-productivity__row">
              <span className="imaging-productivity__name">{row.name}</span>

              <div className="imaging-productivity__bar-wrap">
                <span className="imaging-productivity__reports">
                  {row.reports} reports
                </span>
                <div className="imaging-productivity__track">
                  <div
                    className={`imaging-productivity__fill imaging-productivity__fill--${tone}`}
                    style={{ width: `${row.progress}%` }}
                  />
                </div>
              </div>

              <span className="imaging-productivity__avg">
                {row.avgMinutes}m avg
              </span>
            </li>
          );
        })}
      </ul>
    </DashboardPanel>
  );
}
